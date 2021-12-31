const jwt = require('jsonwebtoken');

const config = {
    authSecret: 'secretKey' //for generating jwt tokens
}

module.exports = config;

// check if user is authenticated and heads to dashboard else fallsback to login.
module.exports.isAuthenticated = function(req, res, next) {
    const bearerHeader = req.headers['authorization'];

    if(bearerHeader !== 'undefined') {
        // extract token
        const bearer = bearerHeader.split(' ');
        // the token
        const token = bearer[1];
        // verify the token and check if expired
        return jwt.verify(token, config.authSecret, (err, decoded) => {
            if(err) {
                return res.status(401).json({error:err});
            }
            else {
                // return res.status(200).jsone({user:decoded});
                return next();
            }
        })
    }
    else {
        return res.status(401).json({error: "No token!"})
    }
}



















// check if user is authenticated.
// module.exports.isAuthenticated = function(req, res, next) {
//     var token = req.headers.authorization;

//     if(token) {
//         jwt.verify(token.replace(/^Bearer\s/, ''), config.authSecret, function(err, decoded){
//             if(err) {
//                 return res.status(401).json({message: 'unauthorized user!'})
//             }
//             else {
//                 return next();
//             }
//         });
//     }
//     else {
//         return res.status(401).json({message: 'unauthorized user!'});
//     }
// }

