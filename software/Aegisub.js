'use strict';

const data = {
  url: 'http://www.aegisub.org/downloads/',
  version: '#current+p>strong',
  changelog: {
    url: '[href^="../changelog/"]',
    selector: '.page-header+ul'
  },
  download: '[href$="portable-64.exe"]',
  install: 'install'
};
module.exports = data;
