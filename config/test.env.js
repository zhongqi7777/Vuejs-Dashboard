"use strict";
const merge = require("webpack-merge");
const devEnv = require("./dev.env");

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  BASE_ENV: JSON.stringify(process.env.npm_config_baseenv) || '"/mock"'
});
