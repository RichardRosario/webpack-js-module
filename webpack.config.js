const path = require('path');

const config = {
  //first required property for webpack to work
  entry: './src/index.js',
  //2nd property for webpack to work
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
};

module.exports = config;