"use strict";
module.exports = {
  NODE_ENV: '"production"',
  BASE_ENV: JSON.stringify(process.env.npm_config_baseenv) || '"/mock"'
};
