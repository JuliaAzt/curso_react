const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  /* Para debugar código react no console */
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devServer: {
    /* Monitora os arquivos estatiscos pra caso haja alguma modificação */
    /* usar static ao invés de contentBase */
    static: path.resolve(__dirname, 'public'),
    hot: true
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    /* Gera o arquivo index.html na pasta dist, sem necessidade de fazer importação */
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    })
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.(j|t)sx$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options:{
                plugins: [
                    isDevelopment && require.resolve('react-refresh/babel')
                ].filter(Boolean)
            }
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        
      }
    ],
  },
};
