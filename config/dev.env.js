"use strict";
const merge = require("webpack-merge");
const prodEnv = require("./prod.env");

// console.log('JSON.stringify(process.env.npm_config_env)',JSON.stringify(process.env.npm_config_baseurl));

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_ENV: JSON.stringify(process.env.npm_config_baseenv) || '"/mock"'
});
