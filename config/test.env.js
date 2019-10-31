"use strict";
const merge = require("webpack-merge");
const devEnv = require("./dev.env");

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  BASE_URL:
    JSON.stringify(process.env.npm_config_baseurl) ||
    '"http://localhost:8080/"',
  BASE_ENV: JSON.stringify(process.env.npm_config_baseenv) || '"/mock"',
  BASE_PROJECT:
    JSON.stringify(process.env.npm_config_baseproject) || '"project1"'
});
