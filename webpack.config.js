var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'eval',
    entry: path.join(__dirname, 'app.js'),
    output: {
        path: __dirname + '/www',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', 'html'],
        root: [
            path.join(__dirname, 'node_modules')
        ]
    }
};
