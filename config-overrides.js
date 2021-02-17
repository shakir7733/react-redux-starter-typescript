const { alias, configPaths } = require("react-app-rewire-alias");
const path = require('path');

module.exports = function override(config) {
  //   alias(configPaths())(config)
  

  // or with spread and custom config file
  alias({
    // ...configPaths('tsconfig.paths.json')
    components: "./src/components",
    environment: path.join(__dirname, 'src', 'environments', process.env.REACT_APP_ENVIRONMENT),
    scenes: "./src/scenes",
    actions: "./src/store/actions",
    store: "./src/store",
    src: "./src",
    ts: "./src/ts",
    helpers: "./src/helpers",
    isEmpty: "./src/helpers/isEmpty.ts",
    constants: "./src/constants",
    assets: "./src/assets",
    navigations: "./src/navigations",
    services:"./src/services",
    selectors:"./src/selectors",
    utils:"./src/utils"
  })(config);

  return config;
};
