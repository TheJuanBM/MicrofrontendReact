const { merge } = require('webpack-merge')
const singleSpaDefaults = require('webpack-config-single-spa-ts')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (webpackConfigEnv, argv) => {
  const orgName = 'microfrontend-with-react'
  const defaultConfig = singleSpaDefaults({
    argv,
    orgName,
    webpackConfigEnv,
    projectName: 'root-config',
    disableHtmlGeneration: true
  })

  return merge(defaultConfig, {
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        favicon: 'src/favicon.ico',
        manifest: 'src/manifest.json',
        template: 'src/index.ejs',
        templateParameters: {
          orgName,
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
        }
      })
    ]
  })
}
