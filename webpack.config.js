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
    devServer: {
        /* Monitora os arquivos estatiscos pra caso haja alguma modificação */
        /* usar static ao invés de contentBase */
        static: path.resolve(__dirname,'public')
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