const path = require('path');

module.exports = {
    mode: "development",
    context: path.resolve(__dirname, 'src'),
    entry: {
        browse: './browse.js',
        component_led: './component_led.js',
        constantes: './constantes.js',
 9th-april
        login: './login.js',
        project: './project.js',
        components: './components',

        password: './password.js',
        project: './project.js'
 main
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