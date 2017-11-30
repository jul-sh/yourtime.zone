const { injectBabelPlugin } = require("react-app-rewired");

module.exports = function override(config, env) {
  config = injectBabelPlugin("emotion", config);
  config = injectBabelPlugin(
    ["babel-plugin-root-import", { rootPathSuffix: "src/" }],
    config
  );
  return config;
};
