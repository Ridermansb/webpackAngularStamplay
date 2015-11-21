var webpack = require('webpack');
var path = require('path');
var AngularPlugin = require('angular-webpack-plugin');

module.exports = {
    cache: true,
    entry: path.join(__dirname, 'app.js'),
    devtool: 'source-map',
    output: {
        path: __dirname + '/www',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
        ]
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', 'html'],
        root: [
            path.join(__dirname, 'node_modules'),
            path.join(__dirname, 'bower_components')
        ],
        alias: {
            'stamplay': './bower_components/stamplay-js-sdk/dist/stamplay.min.js',
            'ngStamplay': 'angular-stamplay',
            'ui.router': 'angular-ui-router',
        }
    },
    externals: {
        stamplay: 'Stamplay',
        angular: 'angular'
    },
    plugins: [
        new AngularPlugin(),
        new webpack.ResolverPlugin(
            [
                new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
            ], ["normal", "loader"]
        )
    ]
};
