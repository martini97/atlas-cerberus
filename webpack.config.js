const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "olympus",
    projectName: "cerberus",
    webpackConfigEnv,
    argv,
  });

  const webSocketHost = process.env.WEBPACK_WEBSOCKET_HOST || "localhost";
  const webSocketPort = process.env.WEBPACK_WEBSOCKET_PORT || undefined;
  const webSocketProtocol = process.env.WEBPACK_WEBSOCKET_PROTOCOL || "ws";

  return merge(defaultConfig, {
    devServer: {
      ...defaultConfig.devServer,
      open: false,
      hot: true,
      client: {
        webSocketURL: {
          hostname: webSocketHost,
          port: webSocketPort,
          protocol: webSocketProtocol,
        },
      },
    },
  });
};
