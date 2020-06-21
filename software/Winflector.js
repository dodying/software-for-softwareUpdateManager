'use strict';

module.exports = {
  commercial: 2,
  url: 'https://www.winflector.com/download.html',
  version: ['[href^="store/free-version"]', 'text', /\((.*?)\)/],
  download: '[href^="store/free-version"]',
  install: 'install_inno'
};
