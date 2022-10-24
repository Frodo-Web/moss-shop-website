const path = require("path");

module.exports={
	mode: "production", 
	entry: "./src/index.js", 
	output: {
		path: path.resolve(__dirname, "docs"),
		assetModuleFilename: 'images/css/[name][hash][ext][query]',
		filename: "main.js"
	},
	target: "web",
	devServer: {
		port: "9500",
		static: ["./docs"],
		open: true,
		hot: true ,
		liveReload: true
	},
	resolve: {
		extensions: ['.js','.jsx','.json'] 
	},
	module:{
		rules: [
			{
				test: /\.css$/,
				exclude: path.resolve(__dirname, 'node_modules'),
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use:  {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			}
		]
	}
}
