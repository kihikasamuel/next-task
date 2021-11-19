const conn = require('../dbConf');
const validator = require('express-validator');

// add tasks
module.exports.addTask = [
    validator.body('label', 'Choose a label for your task'),
    validator.body('title', 'Name your task').isLength({min:3}),
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
        task.company_id = req.body.company_id;

        // save record
        conn.query('INSERT INTO tasks_tbl SET ?', [task], (err, results, fields) => {
            if(err) {
                return res.status(422).json({message: err});
            }
            return res.status(200).json({message: "Task saved successfully!"});
        })
    }
];

// list all tasks
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
            return res.status(500).json({message: 'No record with that id!'})
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
module.exports.updateTasks = [
    validator.body('label', 'Change task label'),
    validator.body('title', 'Rename your task').isLength({min:3}),

    // check if the new title has already been used
    validator.body('title').custom((value, {req})=>{
        return new Promise((resolve, reject)=>{
            conn.query('SELECT * FROM tasks_tbl WHERE title = ? AND id = ?', 
            [value, req.params.id], (err,results)=>{
                if(err) {
                    reject(new Error('Server Error'));
                }

                if(results.length > 0) {
                    reject(new Error('This title has already been used!'));
                }
                resolve(true);
            });
        });
    }),

    validator.body('notes', 'Edit notes about your task'),
    validator.body('repeats', 'Edit Reminder...').isNumeric(),
    validator.body('isreminder', 'Send you a reminder?').isLength({min:2}),

    function(req, res) {
        const errors = validator.validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(422).json({message: errors});
        }

        var id = req.params.id;

        // check iff record exists
        conn.query('SELECT * FROM tasks_tbl WHERE id = ?', id, (error, results, fields)=>{
            if(error) {
                return res.status(500).json({message:"Server Error: "+error});
            }

            if(results.length > 0) {
                const task = results[0];

                // set new values or persist existing ones
                task.label = req.body.label ? req.body.label : task.label;
                task.title = req.body.title ? req.body.title : task.title;
                task.notes = req.body.notes ? req.body.notes : task.notes;
                task.scheduled_on = req.body.scheduledon ? req.body.scheduledon : task.scheduledon;
                task.repeats = req.body.repeats ? req.body.repeats : task.repeats;
                task.is_reminder = req.body.isreminder ? req.body.isreminder : task.isreminder;
                task.status = req.body.status ? req.body.status : task.status;
                task.assign_to = req.body.assignto ? req.body.assignto : task.assignto;
                task.updated_at = new Date();

                // update
                conn.query('UPDATE tasks_tbl SET ? WHERE id=?', [task, id], (error, results, fields)=>{
                    if(error) {
                        return res.status(422).json({message: error});
                    }
                    return res.status(200).json({message: "Task updated successfully"});
                } )
            }
            else {
                return res.json(404).json({message: "No Task to update!"});
            }
        })
    }
    
]