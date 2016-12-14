module.exports = {
  entry: './index.jsx',
  output: {
    filename: 'bundle.js',
    path: './dist',
    publicPath: '/assets/'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader']
      }
    ]
  },
  eslint: {
    configFile: './.eslintrc'
  }
}
