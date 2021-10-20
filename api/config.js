const jwt = require('jsonwebtoken');

const config = {
    authSecret: 'secretKey' //for generating jwt tokens
}

module.exports = config;

// check if user is authenticated.
module.exports.isAuthenticated = function(req, res, next) {
    const bearerHeader = req.headers['authorization'];

    if(bearerHeader !== 'undefined') {
        // extract token
        const bearer = bearerHeader.split('');
        // the token
        const token = bearer[1];
        // verify the token
        jwt.verify(token, config.authSecret, (err, decoded) => {
            if(err) {
                return res.send(401);
            }
            else {
                return next();
            }
        })
    }
    else {
        return res.sendStatus(401)
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

