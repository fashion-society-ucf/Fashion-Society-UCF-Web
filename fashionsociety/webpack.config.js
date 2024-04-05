const path = require('path');
module.exports = {

  entry: {
    index: [path.resolve(__dirname, './src/index.js')]
  },

  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.glsl$/,
        use: 'glslify-loader',
      },
    ],
  },
};
