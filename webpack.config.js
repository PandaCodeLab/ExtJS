const path = require('path')

const conf = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
    publicPath: 'dist/',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
}

module.exports = (env, args) => {
  conf.devtool =
    args.mode === 'production' ? 'none' : 'eval-cheap-module-source-map'
  return conf
}
