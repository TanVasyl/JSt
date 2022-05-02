const HTMLWebPlug = require('html-webpack-plugin');
const {CleanWebPlug, CleanWebpackPlugin} = require('clean-webpack-plugin')
const path = require('path');
const webpack = require('webpack');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

// const paths = {
//     src: path.resolve(__dirname, 'src'),
//     dist: path.resolve(__dirname, 'dist')
// };

const config = {
   
    entry: {
        app: './src/script.tsx',
    },
    
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    devtool: 'inline-source-map',
    
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"],
            },
        ]
    },
    
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebPlug({
            template: './src/index.html'
        })
    ]
};

module.exports = config;