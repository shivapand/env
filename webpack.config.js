/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const sourceClientPath = path.join(process.cwd(), 'source/client');

const nodeModulesString = 'node_modules';

const exclude = [path.join(process.cwd(), nodeModulesString)];

module.exports = {
  entry: {
    bundle: [sourceClientPath]
  },
  output: {
    path: path.join(process.cwd(), 'public/client'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [new HtmlWebpackPlugin(), new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: new RegExp(`${nodeModulesString}`),
          chunks: 'initial',
          name: 'vendor.bundle'
        }
      }
    }
  },
  resolve: {
    alias: {
      client: sourceClientPath
    }
  }
};
