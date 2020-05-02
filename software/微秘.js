'use strict';

const data = {
  url: 'https://wemind.cn/download',
  version: '.media:has(.icon-windows) .download-subtitle',
  download: '.has-button-download[href$=".exe"][href*="x64"]',
  install: ['install_zipped', 'install', 'app-64.7z']
};
module.exports = data;
