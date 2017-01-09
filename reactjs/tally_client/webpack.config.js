module.exports = {
    module: {
	loaders: [{
	    test: /\.jsx?$/,
	    exclude: /node_modules/,
	    loader: 'babel'
	}]
    },
    resolve: {
	extensions: ['', '.js', '.jsx']
    },
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
};
