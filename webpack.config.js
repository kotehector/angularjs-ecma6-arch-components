var HtmlWebpackPlugin = require('html-webpack-plugin');
var NgAnnotatePlugin = require('ng-annotate-webpack-plugin');
var path = require("path");


module.exports = {
	// entry-point
	entry: {
		app: './src/app/app.module.js'
	},
	// output
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
		loaders: [
      {
        test   : /\.js$/,
        loaders: ['ng-annotate', 'nginject?deprecate' /*...transpiler? */]
			}
		],
    rules: [
      {
        test: /\.js$/,
        exclude: ['/node_modules/'],
        use: [
          {
            loader: 'babel-loader',
            options: {
              compact: false,
              presets: ['es2015']
            }
          }
        ]
      },
      {
        test: /\.(scss|css)$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
      },
      {
				test: /\.html$/,
				use: [
          { loader: 'html-loader' }
        ]
			},
			{
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
					'file-loader',          
          {
            loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true,
						}
          }
        ]
      },
    ]
	},
	plugins: [
		// Plugin Para Empaquetar HTML
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),
		// Plugin para injectar Dependencias
		new NgAnnotatePlugin({
      add: true,
    })
	],
	// debug
  devtool: 'source-map'
};
