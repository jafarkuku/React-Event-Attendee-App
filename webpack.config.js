var webpack = require("webpack")

module.exports = {
  entry : './src/index.js',
  output : {
    path : __dirname + '/build',
    publicPath : '/',
    filename : 'bundle.js'
  },
  devServer : {
    inline : true,
    contentBase: './build',
    historyApiFallback: true,
    port : 3000
  },
  module : {
    loaders : [{
      exclude : /node_modules/,
      loader : 'babel-loader',
      query : {
        presets : ["react", "latest", "stage-0"]
      }
    },
    {
      test: /\.json$/,
      exclude: /(node_modules)/,
      loader: 'json-loader'
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
