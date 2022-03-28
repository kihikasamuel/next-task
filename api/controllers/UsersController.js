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
    'Password must be 6 characters or longer and must contain atleast 1 uppercase letter, a number and a special character')
    .isLength({min: 6}).isStrongPassword(),

    validator.body('signed_terms', 'Please accept our terms and conditions to continue').notEmpty(),

    function(req, res) {

        // after checking validations errors, throw them if any
        const errors = validator.validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(422).json({errors:errors.mapped()});
        }

        // initialize data to be sent
        const user = {};
        user.username = req.body.username;
        user.fullname = req.body.full_name;
        user.password = req.body.password;
        user.tc_accepted = req.body.signed_terms;

        // generate a unique alphanum ID
        let u_id = Math.random().toString(36).slice(2);
        user.company_uid = u_id;

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
    validator.body('username', 'Invalid Email!').isEmail(),
    validator.body('password', 'Password too short or incorrect!').isLength({min:6}).isStrongPassword(),

    function(req, res) {
        const errors = validator.validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(422).json({errors:errors.mapped()});
        }

        // check if email and password matches
        conn.query('SELECT * FROM users_tbl WHERE username=?', req.body.username, (err, results, fields) =>{
            if(err){
                return res.status(500).json({errors:err.mapped()});
            }

            if(results.length > 0) {
                const user = results[0];

                return bcrypt.compare(req.body.password, user.password, (err, isMatched) => {
                    if(isMatched===true){
                        return res.json({
                            user: {
                                id: user.id,
                                username: user.username,
                                fullname: user.fullname,
                                company: user.company_uid
                            },
                            token: jwt.sign({id:user.id, username:user.username, fullname:user.fullname, companyid:user.company_uid}, config.authSecret)
                        })
                    }
                    else{
                        return res.status(500).json({errors: 'Invalid Password!'});
                    }
                })
            }
            else{
                return res.status(500).json({errors: 'Invalid credentials!'});
            }
        });
    }
]

// Get User
module.exports.user = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];

    if(bearerHeader !== undefined) {
        const auth_string = bearerHeader.split(' ');

        // grab token 
        const token = auth_string[1];

        // verify if token is valid'
        jwt.verify(token, config.authSecret, (error, decoded) => {
            if(error) {
                return res.status(401).json({errorors: error.mapped()})
            }
            else {
                return res.status(200).json({user: decoded});
                // return next();
            }
        })
    }
    else {
        return res.status(401).json({message: 'No token found!'})
    }
}