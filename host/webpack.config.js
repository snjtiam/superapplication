const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    publicPath: 'http://localhost:3000/',
    uniqueName: 'host',
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        // Add remote apps here as they are developed
        // remote1: 'remote1@http://localhost:3001/remoteEntry.js',
        // remote2: 'remote2@http://localhost:3002/remoteEntry.js',
      },
      shared: {
        react: {singleton: true, eager: true},
        'react-dom': {singleton: true, eager: true},
        'react-router-dom': {singleton: true, eager: true},
        '@react-navigation/native': {singleton: true, eager: true},
        '@react-navigation/stack': {singleton: true, eager: true},
      },
    }),
  ],
};
