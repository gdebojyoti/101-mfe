const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 4002,
    headers: {
      "Cross-Origin-Resource-Policy": "cross-origin"
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "quiz",
      filename: "remoteEntry.js",
      exposes: {
        "./index": "./src/index"
      }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
}