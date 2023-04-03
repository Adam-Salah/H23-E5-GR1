const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        browse: './src/browse.js',
        index: './src/index.js',
        login: './src/login.js',
        project: './src/project.js',
        component_led: './src/component_led.js',
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    }
};