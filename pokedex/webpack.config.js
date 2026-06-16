const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 4001,
    headers: {
      "Cross-Origin-Resource-Policy": "cross-origin"
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "pokedex",
      filename: "remoteEntry.js",
      exposes: {
        "./index": "./src/bootstrap"
      }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
}