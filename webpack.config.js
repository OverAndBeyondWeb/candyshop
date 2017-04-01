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
					presets: ['es2015', 'react'],
					plugins:['transform-react-jsx-img-import']
				}
			},
			{
				test: /\.scss$/,

				include: path.join(__dirname, 'src', 'css'),
				loader: 'style-loader!css-loader!sass-loader'
			},
			{
				test: /\.(png|jpg)$/,
				include: path.join(__dirname, 'src', 'assets'),
				loader: 'file-loader?name=[path][name].[ext]'
			}
		]
	}
}