"use strict";
const merge = require("webpack-merge");
const prodEnv = require("./prod.env");

// console.log('JSON.stringify(process.env.npm_config_env)',JSON.stringify(process.env.npm_config_baseurl));

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  HOST: JSON.stringify(process.env.npm_config_host),
  PORT: JSON.stringify(process.env.npm_config_port),
  // BASE_URL:
  //   JSON.stringify(process.env.npm_config_baseurl) ||
  //   '"http://localhost:8080/"',
  BASE_URL: JSON.stringify(process.env.npm_config_baseurl),
  BASE_ENV: JSON.stringify(process.env.npm_config_baseenv) || '"mock"',
  BASE_PROJECT:
    JSON.stringify(process.env.npm_config_baseproject) || '"project1"'
});
