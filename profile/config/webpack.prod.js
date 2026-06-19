const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const commonConfig = require("./webpack.common");

const prodConfig = {
  mode: "production",
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
