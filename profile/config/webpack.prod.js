const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const commonConfig = require("./webpack.common");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js"
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "profile",
      filename: "remoteEntry.js",
      exposes: {
        "./index": "./src/bootstrap"
      }
    })
  ]
};

module.exports = {
  ...commonConfig,
  ...prodConfig
};
