const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
	devtool: isDev ? 'source-map' : false,
	target: isDev ? 'web' : 'es5',
	entry: path.join(__dirname, 'src/index.js'),

	output: {
		filename: '[name]-[hash:5].js',
		path: path.join(__dirname, 'dist'),
		publicPath: ''
	},

	devServer: {
		port: 9000,
		contentBase: path.join(__dirname, 'dist')
	},

	plugins: [
		new HtmlWebpackPlugin({template: 'src/index.html'}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({filename: 'style/style-[hash:5].css'})],

	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.html$/,
				loader: 'html-loader',
				options: {
					esModule: false
				}
			},
			{
				test: /\.(png|jpg|svg)$/,
				type: 'asset/resource',
				generator: {
					filename: 'assets/imgs/[name]-[hash:5][ext]'
				}
			},
			{
				test: /\.(woff2|woff|otf|ttf)$/,
				type: 'asset/resource',
				generator: {
					filename: 'assets/fonts/[name]-[hash:5][ext]'
				}
			},
			{
				test: /\.scss$/,
				use: [
					{loader: MiniCssExtractPlugin.loader, options: {publicPath: "../"}},
					{loader: 'css-loader'},
					{loader: 'resolve-url-loader'},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					},
				]
			}
		]
	}
}