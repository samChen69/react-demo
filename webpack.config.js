const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry:'./src/main.js',
	output:{
		path:__dirname+'dist',
		filename:'[name].bundle.js'
	},
	module:{
		loaders:[
			{
				test:/.js$/,
				exclude:path.resolve(__dirname,'node_modules'),
				loader:'babel'
			},
			{
				test:/.jsx$/,
				exclude:path.resolve(__dirname,'node_modules'),
				loader:'babel'
			},
			{
				test:/.css$/,
				loader:'style-loader!css-loader'
			},
			{
				test:/.(png|jpg|gif)$/,
				loader:'file-loader'
			},
			{
				test:/.(woff|woff2|eot|ttf|otf)$/,
				use:['file-loader']
			}
		],
	},
	plugins:[
		new htmlWebpackPlugin({
			filename:'index.html',
			template:'index.html',
			inject:'body'
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	devtool:'inline-source-map'
}