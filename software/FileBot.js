'use strict';

module.exports = {
  commercial: 3,
  url: 'https://www.filebot.net/',
  version: '[href$="x64.msi"]',
  download: '[href$="x64.msi"]',
  install: ['install_msi', null, 'filebot.exe']
};
