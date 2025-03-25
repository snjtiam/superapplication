const { ModuleFederationPlugin } = require("@callstack/repack");

module.exports = {
  projectRoot: __dirname,
  watchFolders: [__dirname],
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    sourceExts: ["jsx", "js", "ts", "tsx", "json"],
  },
  server: {
    port: 3001,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "remote1",
      filename: "remoteEntry.js",
      exposes: {
        "./RemoteComponent": "./src/components/RemoteComponent",
        "./RemoteScreen": "./src/screens/RemoteScreen",
      },
      shared: {
        react: { singleton: true, eager: true },
        "react-native": { singleton: true, eager: true },
        "@react-navigation/native": { singleton: true, eager: true },
        "@react-navigation/stack": { singleton: true, eager: true },
      },
    }),
  ],
};
