'use strict';

module.exports = {
  url: 'https://edu.kde.org/kstars/',
  version: '[href$=".exe"]',
  download: '[href$=".exe"]',
  install: ['install_zipped', 'install', '.7z']
};
