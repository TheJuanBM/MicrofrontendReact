const { merge } = require('webpack-merge')
const singleSpaDefaults = require('webpack-config-single-spa-react-ts')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'microfrontend-with-react',
    projectName: 'section',
    webpackConfigEnv,
    argv
  })

  return merge(defaultConfig, {
    plugins: [new HtmlWebpackPlugin({ filename: 'index.html' })]
  })
}
