const path = require("path");

module.exports={
	mode: "development", 
	entry: "./src/index.js", 
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "main.js"
	},
	target: "web",
	devServer: {
		port: "9500",
		static: ["./public"],
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
