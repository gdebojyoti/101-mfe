const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const commonConfig = require("./webpack.common");

const domain = process.env.PRODUCTION_DOMAIN;

const devConfig = {
  mode: "development",
  output: {
    filename: "[name].[contenthash].js"
  },
  plugins: [
    new ModuleFederationPlugin({
      // name: "container",
      remotes: {
        profile: `profile@${domain}/profile/remoteEntry.js`
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
