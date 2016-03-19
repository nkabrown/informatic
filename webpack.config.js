const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  context: __dirname + '/src',
  entry: './js/app.js',
  output: {
    path: './src/dist',
    filename: 'app.bundle.js'
  },
  devtool: debug ? 'sourcemap' : null,
  module: {
    loaders: [
      { test: /\.js?$/, exclude: /(node_modules|bower_components)/, loader: 'babel', query: { presets: ['es2015', 'stage-1'] } },
      { test: /\.css?$/, loader: 'style!css' }
    ]
  }
}
