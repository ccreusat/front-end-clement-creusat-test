const webpack = require("webpack");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: path.resolve(__dirname, "./src/index.tsx"),
	mode: "production",
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{ test: /\.tsx?$/, loader: "ts-loader" },
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
				loader: "url-loader",
				options: {
					limit: 8192,
				},
			},
		],
	},
	resolve: {
		extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
	},
	output: {
		path: path.resolve(__dirname, "./public"),
		filename: "bundle.js",
	},
	plugins: [
		new HtmlWebPackPlugin({
			hash: true,
			filename: "index.html", //target html
			template: "./public/index.html", //source html
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
	devServer: {
		historyApiFallback: true,
		contentBase: path.resolve(__dirname, "./public"),
		hot: true,
	},
};
