const { injectBabelPlugin } = require('react-app-rewired')
const rewireStyledComponents = require('react-app-rewire-styled-components')

module.exports = function override(config, env) {
  config = rewireStyledComponents(config, env)
  config = injectBabelPlugin(
    ['babel-plugin-root-import', { rootPathSuffix: 'src/' }],
    config
  )

  return config
}
