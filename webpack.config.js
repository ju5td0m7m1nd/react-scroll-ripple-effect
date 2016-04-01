var path = require('path');

module.exports = {
    entry: [
        './component/container.jsx'
    ],
    output: {
        path: path.join(__dirname, 'public/javascripts/build/'),
        filename: 'bundle.js',
    },
    externals: {
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js$|\.jsx$/,
            loaders: ['babel'],
            exclude: /node_modules/,
            include: __dirname
        }]
    },
};

