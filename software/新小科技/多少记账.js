'use strict';

module.exports = {
  url: 'https://duoshao.net/',
  version: ['.download-btn>a[href$=".exe"]', 'href', /Duoshao-Setup-(.*?).exe/],
  download: '.download-btn>a[href$=".exe"]',
  install: ['install_zipped', 'install', 'app-64.7z']
};
