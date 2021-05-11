const withTM = require("next-transpile-modules")(["unist-util-visit"]);

module.exports = withTM({
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
        net: "empty",
        tls: "empty",
        child_process: "empty",
      };
    }

    return config;
  },
});
