var path = require('path');

module.exports = {
  entry: './client/app.jsx',

  output: {
    filename: 'app.js',
    path: path.join('public/javascripts/')
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-object-assign']
        }
      }
    ]
  }
};
