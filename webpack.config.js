var path = require('path');

module.exports = {
  entry: './src/client/app.jsx',

  output: {
    filename: 'app.js',
    path: path.join('public/javascripts/')
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
