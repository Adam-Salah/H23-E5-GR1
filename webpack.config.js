const path = require('path');

/**
 * Permet de bundler plusieurs fichiers .js en un seul fichier utilisable sur une page html
 * Fichiers de distribution sauvegardés dans ./dist
 */
module.exports = {
    mode: "development",
    context: path.resolve(__dirname, 'src'),
    entry: {

        // adam
        './Browse': './Browse',
        './Login': './Login',
        './Projet': './Projet',
        './Application/Application': './Application/Application',
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