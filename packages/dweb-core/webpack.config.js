const path = require("path");
const pkg = require("dweb-pkg");
const WebpackPreBuildPlugin = require("pre-build-webpack");
const fs = require("fs");
const glob = require("glob");

module.exports = {
  entry: './index.js',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new WebpackPreBuildPlugin(function(stats) {
        pkg("./src/**/*.js", "./package.js", "./src/", glob, fs);
    })
  ]
};