'use strict';

const data = {
  url: 'https://www.heidisql.com/download.php',
  version: '#content-top+h1',
  changelog: ['https://github.com/HeidiSQL/HeidiSQL/releases/latest', '.release-header+.markdown-body'],
  download: '#download-portable-64',
  install: 'install',
  other: {
    nightly: {
      version: '#nightlybuilds>li>label',
      changelog: null,
      download: '#nightlybuilds>li .download-link[href*="heidisql64"]',
      install: 'install_single'
    }
  }
};
module.exports = data;
