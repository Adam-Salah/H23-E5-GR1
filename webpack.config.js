const path = require('path');

module.exports = {
    mode: "development",
    context: path.resolve(__dirname, 'src'),
    entry: {

        // adam
        './Browse': './Browse',
        './Login': './Login',
        './Projet': './Projet',
        './Application/Application': './Application/Application',

        // ak
        components: './components.js',
        circuit: './circuit.js',
        calculations: './calculations.js',
        test_main: './test_main.js', // for testing, delete later
 
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