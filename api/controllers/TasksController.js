const conn = require('../dbConf');
const validator = require('express-validator');

// add tasks
module.exports.addTask = [
    validator.body('label', 'Choose a label for your task'),
    validator.body('title', 'Name your task'),
    validator.body('notes', 'Add some  notes about your task'),
    validator.body('repeats', 'Remind me every...').isNumeric(),
    validator.body('isreminder', 'Send you a reminder?').isLength({min:2}),
    validator.body('assignto').custom((value)=>{
        return new Promise((resolve, reject)=>{
            conn.query('SELECT fullname FROM users_tbl', (err, results, fields)=>{
                if(err) {
                    reject(err);
                }
                if(results.length > 0){
                    resolve(fields);
                }
                resolve(true);
            })
        })
    }),

    function(req, res) {
        const errors = validator.validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(422).json({message: errors});
        }

        // init task
        const task = {};
        task.label = req.body.label;
        task.title = req.body.title;
        task.notes = req.body.notes;
        task.scheduled_on = req.body.scheduledon;
        task.repeats = req.body.repeats;
        task.is_reminder = req.body.isreminder;
        task.status = req.body.status;
        task.assign_to = req.body.assignto;

        // save record
        conn.query('INSERT INTO tasks_tbl SET ?', task, (err, results, fields) => {
            if(err) {
                return res.status(422).json({message: err});
            }
            return res.status(200).json({message: "Task saved successfully!"});
        })
    }
];

// list tasks
module.exports.list = function(req, res) {
    conn.query('SELECT * FROM tasks_tbl', (error, results, fields) => {
        if(error) {
            return res.status(422).json({message:error})
        }

        if(results.length > 0) {
            return res.status(200).json(results);
        }
        else {
            return res.status(200).json([]);
        }
    });
};

// list one
module.exports.getTaskById = function(req, res) {
    var id = req.params.id;
    conn.query('SELECT * FROM tasks_tbl WHERE id=?', id, (error, results, fields)=>{
        if(error) {
            return res.status(500).json({message: error})
        }

        if(results.length > 0) {
            return res.status(200).json(results);
        }
        else {
            return res.status(200).json([]);
        }
    })
}

// delete task
module.exports.removeTask = function(req, res) {
    var id = req.params.id;
    conn.query('SELECT * FROM tasks_tbl WHERE id=?', id, (error, results, fields) => {
        if(error) {
            return res.status(500).json({message: error});
        }

        if(results.length > 0){
            conn.query('DELETE FROM tasks_tbl WHERE id=?', id, (error, results) => {
                if(error) {
                    return res.status(500).json({message: error});
                }
                return res.status(200).json({message: "Task deleted!"})
            })
        }
        else {
            return res.json({message: "No such record!"})
        }
    })
};

// update task