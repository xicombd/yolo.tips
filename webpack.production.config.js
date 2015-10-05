var webpack = require('webpack')

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: [
    './src/index.jsx'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  },
  module: {
    loaders: [
      {
        include: /\.js*/,
        loaders: [
          'babel-loader?stage=0'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(json)$/,
        loader: 'json-loader'
      },
      {
        test: /\.(scss)$/,
        loader: 'style!css!sass?outputStyle=expanded'
      },
      {
        test: /\.(css)$/,
        loader: 'style!css?outputStyle=expanded'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  }
}
