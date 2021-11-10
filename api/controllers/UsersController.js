const conn = require('../dbConf');
const config = require('../config');
const jwt = require('jsonwebtoken');
const validator = require('express-validator');
const bcrypt = require('bcryptjs');
const { json } = require('express');
// const { resolve } = require('core-js/fn/promise');

// Register a user
module.exports.register = [
    validator.body('username', 'Please enter a valid email!').isEmail(),
    validator.body('full_name', 'Please enter your full name').isLength({min: 2}),

    // check if email exists.
    validator.body('username').custom(value => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM users_tbl WHERE username = ?', [value], (err, results) => {
                if(err) {
                    reject(new Error('An Unknown error occured!'));
                }
                if(results.length > 0) {
                    reject(new Error('This username is already taken!'))
                }
                resolve(true);
            })
        })
    }),
    
    validator.body('password', 
    'Password must 6 character or longer and must contain atleast an uppercase letters, numbers and special characters')
    .isLength({min: 6}).isStrongPassword(),

    function(req, res) {

        // after checking validations errors, throw them if any
        const errors = validator.validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(422).json({message:"An error occured!", error: errors});
        }

        // initialize data to be sent
        const user = {};
        user.username = req.body.username;
        user.fullname = req.body.full_name;
        user.password = req.body.password;

        // generate a unique alphanum ID
        let uid = Math.random().toString(36).slice(2);
        user.company_uid = uid;

        // encrypt password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(user.password, salt);
        // destructuring user.password
        user.password = hash;

        //save records to db
        conn.query('INSERT INTO users_tbl SET ?', user, (err, results, fields) => {
            if(err) {
                return res.status(422).json({message: 'Unable to register user!'});
            }
            return res.status(200).json({message: 'Registered successfully! Proceed to login'})
        });
    }
];

// login
module.exports.login = [
    validator.body('username', 'Please enter a valid email!').isEmail(),
    validator.body('password', 'Wrong password').isLength({min:6}).isStrongPassword(),

    function(req, res) {
        const errors = validator.validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(422).json({message:errors.mapped()});
        }

        // check if email and password matches
        conn.query('SELECT * FROM users_tbl WHERE username=?', req.body.username, (err, results, fields) =>{
            if(err){
                return res.status(500).json({message:err.mapped()});
            }

            if(results.length > 0) {
                const user = results[0];

                return bcrypt.compare(req.body.password, user.password, (err, isMatched) => {
                    if(isMatched===true){
                        return res.json({
                            user: {
                                id: user.id,
                                username: user.username,
                                fullname: user.fullname
                            },
                            token: jwt.sign({id:user.id, username:user.username, fullname:user.fullname}, config.authSecret)
                        })
                    }
                    else{
                        return res.status(500).json({message:"Invalid username or password!"})
                    }
                })
            }
            else{
                return res.status(500).json({message:"Invalid username or password!"})
            }
        });
    }
]