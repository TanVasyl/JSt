const path = require('path')
const HTMLWebPlug = require('html-webpack-plugin')
const {CleanWebPlug, CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebPlug = require('copy-webpack-plugin')
const MCEP = require('mini-css-extract-plugin')
const TerserWebPlug = require('terser-webpack-plugin')

const isDev = process.env.Node_ENV === 'development'
const isProd = !isDev

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
   }
   if (isProd) {
       config.minimizer = [
           new TerserWebPlug()
       ]
   }
   return config
}
module.exports = {
    context: path.resolve(__dirname,'JST'),
    entry: {
       main : '../script.ts',
    },   
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve:{
        extensions: [''],
        alias:{},
    },
    optimization: optimization(),
    plugins: [
        new HTMLWebPlug({
            title: 'DocumentWP',
            template: '../index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new MCEP({
            filename: '[name].[hash].css'
        })
    ],
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    {
                    loader: MCEP.loader,
                    },'css-loader']
            },
            {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                 loader: "babel-loader",
                 options: {
                    presets: ['@babel/preset-env']
                    },
              }
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                     loader: "babel-loader",
                     options: {
                        presets: [
                        '@babel/preset-env',
                        "@babel/preset-typescript"]
                        }
                    }
                },
        ]
    }
}
