const app = require('./index');

module.exports = {
    path: '/api',
    handler: app
}

// required by nuxt: tells nuxt the path to the backend