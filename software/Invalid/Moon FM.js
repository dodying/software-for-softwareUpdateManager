'use strict';

const data = {
  url: 'https://moon.fm/labs',
  version: ['a[href$=".exe"]', 'href', /Setup%20(.*?).exe/],
  download: 'a[href$=".exe"]',
  install: ['install_zipped', 'install', 'app-64.7z']
};
module.exports = data;
