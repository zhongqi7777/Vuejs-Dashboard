"use strict";
module.exports = {
  NODE_ENV: '"production"',
  BASE_URL:
    JSON.stringify(process.env.npm_config_baseurl) ||
    '"http://localhost:8080/"',
  BASE_URL: JSON.stringify(process.env.npm_config_baseurl),
  BASE_ENV: JSON.stringify(process.env.npm_config_baseenv) || '"/mock"',
  BASE_PROJECT:
    JSON.stringify(process.env.npm_config_baseproject) || '"project1"'
};
