'use strict';

const data = {
  commercial: 2,
  url: 'https://www.neat-reader.cn/downloads/windows',
  version: ['[href$=".exe"]', 'href', /Setup%20(.*?).exe/],
  download: '[href$=".exe"]',
  install: ['install_zipped', 'install', 'app-32.7z']
};
module.exports = data;
