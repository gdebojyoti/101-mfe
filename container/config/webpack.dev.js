const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  output: {
    publicPath: "/"
  },
  devServer: {
    port: 4000,
    historyApiFallback: true
  },
  plugins: [
    new ModuleFederationPlugin({
      // name: "container",
      remotes: {
        pokedex: "pokedex@http://localhost:4001/remoteEntry.js",
        quiz: "quiz@http://localhost:4002/remoteEntry.js",
        profile: "profile@http://localhost:4003/remoteEntry.js"
      }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};

module.exports = {
  ...commonConfig,
  ...devConfig
};
