const withSass = require('@zeit/next-sass');
const withProgressBar = require('next-progressbar');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const Visualizer = require('webpack-visualizer-plugin');
const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
});

let config = {
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000,
    pagesBufferLength: 99,
  },
  pageExtensions: ['js', 'jsx', 'mdx'],
  webpack: (config, { dev }) => {
    config.module.rules.push({
      test: /\.glsl$/,
      use: ['raw-loader'],
    });

    if (dev) {
      config.devtool = 'cheap-module-source-map';
      config.output.crossOriginLoading = 'anonymous';
    }

    return config;
  },

  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      ignored: [/\.git\//, /\.next\//, /node_modules/],
    };
    return config;
  },
  plugins: [
    new Visualizer({
      filename: './statistics.html',
    }),
  ],
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html',
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html',
    },
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    };
  },
};

config = withMDX(config);
config = withSass(config);
config = withProgressBar(config);
config = withBundleAnalyzer(config);

module.exports = config;
