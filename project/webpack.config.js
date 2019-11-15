'use strict';

const path = require('path');

module.exports = {
    context: path.join(__dirname, './src'),
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    entry: ['./index.ts'],
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'index.js',
      libraryTarget: 'commonjs'
    },
    target: 'node',
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.(ts)$/,
          exclude: /node_modules/,
          loader: 'awesome-typescript-loader',
          options: {
            useBabel: true,
            babelCore: '@babel/core',
          },
        }
      ],
    }
}
