const path = require('path');
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const { getLessVars } = require('antd-theme-generator');

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', style: true }],
    config
  );
  config = rewireLess.withLoaderOptions({
    modifyVars: getLessVars(path.join(__dirname, './src/styles/vars.less'))
  })(config, env);
  return config;
};