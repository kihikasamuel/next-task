const plugin = require('tailwindcss/plugin');

module.exports = {
    theme: {
        extend: {
            colors: {
                blue: {
                    250: '#00c6fb',
                    650: '#005bea'
                },
            },
        },
    },
    plugin: [
        require('@tailwindcss/forms'),
    ],
}