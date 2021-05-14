const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const { resolve } = path;

const { NODE_ENV } = process.env;

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  mode: NODE_ENV || 'development',
  entry: resolve(__dirname, 'src/index.ts'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-modules-typescript-loader?modules',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]__[hash:base64:5]',
                auto: /\.module\.\w+$/i,
              },
              sourceMap: true,
            },
          },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: resolve(__dirname, 'public/index.html'),
    }),
  ],
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  devtool: 'source-map',
};
