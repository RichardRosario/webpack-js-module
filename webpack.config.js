const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  //first required property for webpack to work
  entry: './src/index.js',
  //2nd property for webpack to work
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'build/'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(jpg?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 }
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ]
};

module.exports = config;