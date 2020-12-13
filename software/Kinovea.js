'use strict';

const data = {
  url: 'https://www.kinovea.org/download.html',
  version: '[href$=".exe"]',
  download: '[href$=".exe"]',
  install: 'install_nsis',
  other: {
    beta: {
      version: 'h4:contains("beta")+p+ul a[href$="x64.exe"]',
      download: 'h4:contains("beta")+p+ul a[href$="x64.exe"]'
    }
  }
};
module.exports = data;
