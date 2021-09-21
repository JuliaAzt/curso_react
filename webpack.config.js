const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry: path.resolve(__dirname,'src', 'index.jsx'),
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    resolve:{
        extensions:[
            '.js',
            '.jsx'
        ]
    },
    plugins:[
        
        /* Gera o arquivo index.html na pasta dist, sem necessidade de fazer importação */
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'public', 'index.html')
        })
        
    ],
    module: {
        rules: [
            {
                test:/\.jsx$/, 
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
}