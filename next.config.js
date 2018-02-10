const withTs = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { ANALYZE } = process.env

module.exports = withTs(withSass({
  webpack: function (config) {
    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true
      }))
    }

    return config
  }
}))
