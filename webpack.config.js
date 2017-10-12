

module.exports = {
	entry:'./src/main.js',
	output:{
		path:__dirname+'dist',
		filename:'[name].bundle.js'
	},
	loader:[
		{
			test:/.js$/,
			loader:'babel-loader'
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
	plugins:[

	],
}