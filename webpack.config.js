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
        './Application/Case': './Application/Case',
        './Application/Grille': './Application/Grille',
        './Application/Constantes': './Application/Constantes',
        './Application/Composantes/Led': './Application/Composantes/Led',
        './Application/Composantes/Composante': './Application/Composantes/Composante',

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