const path = require('path');


module.exports = {
	entry: path.join(__dirname, 'src', 'js', 'index.js'),
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, "dist/js"),
		publicPath: '/js/'
	},
	devServer: {
		port: 3000,
		contentBase: 'dist'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.css$/,
				include: path.join(__dirname, 'src', 'css'),
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.(png|jpg)$/,
				include: path.join(__dirname, 'src'),
				loader: 'file-loader'
			}
		]
	}
}