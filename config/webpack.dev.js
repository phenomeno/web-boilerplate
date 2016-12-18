const path = require('path')
const logger = require('debug')
const sources = (location) => path.join(__dirname, '../../app', location);
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

var config = {
  cache: true,
  entry: {
    bundle: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:4004',
      'webpack/hot/only-dev-server',
      path.join(__dirname, '../app/index.jsx')
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: 'http://localhost:4004/dist/',
    libraryTarget: 'var',
    pathinfo: true
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
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.WatchIgnorePlugin([
        path.join(__dirname, '../../src/shared')
    ]),
    new webpack.DefinePlugin({
        'process.env.DEV': true,
        'process.env.BROWSER': true,
        'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
}

// Run DEV server for hot-reloading
//---------------------------------
const compiler = webpack(config)
const port = 4004

new WebpackDevServer(compiler, {
    publicPath: config.output.publicPath,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Expose-Headers': 'SourceMap,X-SourceMap'
    },
    hot: true,
    historyApiFallback: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: false
    },
    stats: {
        colors: true,
        hash: false,
        timings: false,
        version: false,
        chunks: false,
        modules: false,
        children: false,
        chunkModules: false
    }
}).listen(port, '0.0.0.0', function (err, result) {
    if (err) return logger('webpack:error', err);

    logger('webpack:compiler')('Running on port ' + port)
})
