'use strict';

const data = {
  url: 'https://rstudio.com/products/rstudio/download/',
  version: '[href$=".exe"]',
  // changelog: ['https://rstudio.com/products/rstudio/release-notes/', 'div>.mx-auto'],
  download: '[href$=".exe"]',
  install: 'install_nsis'
};
module.exports = data;
