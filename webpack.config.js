const path = require('path');

module.exports = {
    mode: "development",
    context: path.resolve(__dirname, 'src'),
    entry: {

        // adam
        browse: './browse.js',
        component_led: './component_led.js',
        constantes: './constantes.js',
        password: './password.js',
        project: './project.js',

        // ak
        components: './components',
        test_main: './test_main.js' // for testing, delete later
 
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