const {ModuleFederationPlugin} = require('@callstack/repack');

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
    sourceExts: ['jsx', 'js', 'ts', 'tsx', 'json'],
  },
  server: {
    port: 3000,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        remote1: 'remote1@http://localhost:3001/remoteEntry.js',
      },
      shared: {
        react: {singleton: true, eager: true},
        'react-native': {singleton: true, eager: true},
        '@react-navigation/native': {singleton: true, eager: true},
        '@react-navigation/stack': {singleton: true, eager: true},
      },
    }),
  ],
};
