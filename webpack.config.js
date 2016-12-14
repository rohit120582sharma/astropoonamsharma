var webpack = require('webpack');
var html = require("html-webpack-plugin");


module.exports = {
     entry: './app/bootstrap.ts',
     output: {
         path: './assets/js',
         filename: 'app.bundle.js',
     },
     module: {
         loaders: [{
             test: /\.ts$/,
             loader: 'ts'
         }]
     },
     resolve: {
     	extensions: ['', '.js', '.ts']
     }
 }