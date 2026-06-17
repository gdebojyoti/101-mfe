const HtmlWebpackPlugin = require("html-webpack-plugin");

const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8003,
    historyApiFallback: {
      index: "index.html"
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};

module.exports = {
  ...commonConfig,
  ...devConfig
}