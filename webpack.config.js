const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 5000,
    },
    mode: 'development',
    // resolve: {
    //     extensions: ['.js']
    // },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}