'use strict';

module.exports = {
  url: 'https://www.bishouapp.com/',
  version: '.download_platform>[href$=".exe"]',
  download: '.download_platform>[href$=".exe"]',
  install: ['install_zipped', 'install_zipped', '.exe', 'install', 'app-32.7z']
};
