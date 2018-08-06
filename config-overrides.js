const { injectBabelPlugin } = require('react-app-rewired')
const rewirePreact = require('react-app-rewire-preact')

module.exports = function override(config, env) {
  config = injectBabelPlugin('emotion', config)
  config = injectBabelPlugin(
    ['babel-plugin-root-import', { rootPathSuffix: 'src/' }],
    config
  )
  config = rewirePreact(config, env)
  return config
}
