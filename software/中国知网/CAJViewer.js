'use strict';

module.exports = {
  url: 'https://cajviewer.cnki.net/download.html',
  version: ['.item-downType[href*="/CAJViewer"]', 'href', /CAJViewer%20(.*?).self.exe/],
  download: '.item-downType[href*="/CAJViewer"]',
  install: ['install_zipped', 'install_msi', '.msi', null, 'CAJVieweru.exe']
};
