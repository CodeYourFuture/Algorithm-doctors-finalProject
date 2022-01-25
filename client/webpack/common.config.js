const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const Dotenv = require("dotenv");
Dotenv.config();



module.exports = {
	entry: "./client/src/index.js",
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						cacheDirectory: true,
					},
				},
			},
			{
				test: /\.(png|svg|jpe?g|gif)$/,
				loader: "file-loader",
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	output: {
		publicPath: "/",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./client/src/index.html",
		}),
		new webpack.DefinePlugin({
			"process.env": JSON.stringify(process.env),
		}),
	],
};
