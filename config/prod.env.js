"use strict";
module.exports = {
  NODE_ENV: '"production"',
  HOST: JSON.stringify(process.env.npm_config_host),
  PORT: JSON.stringify(process.env.npm_config_port),
  BASE_URL:
    JSON.stringify(process.env.npm_config_baseurl) ||
    '"http://localhost:8080/"',
  BASE_URL: JSON.stringify(process.env.npm_config_baseurl),
  BASE_ENV: JSON.stringify(process.env.npm_config_baseenv) || '"/mock"',
  BASE_PROJECT:
    JSON.stringify(process.env.npm_config_baseproject) || '"project1"'
};
