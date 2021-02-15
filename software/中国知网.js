'use strict';

module.exports = {
  type: 'software-list',
  list: {
    CAJViewer: {
      url: 'https://cajviewer.cnki.net/download.html',
      version: ['.item-downType[href*="/CAJViewer"]', 'href', /CAJViewer%20(.*?).self.exe/],
      download: '.item-downType[href*="/CAJViewer"]',
      install: ['install_zipped', 'install_msi', '.msi', null, 'CAJVieweru.exe']
    },
    CAJ云阅读: {
      url: 'http://cajviewer.cnki.net/cajcloud/',
      version: ['.download a', 'href'],
      download: '.download a',
      install: ['install_zipped', 'install', '.exe']
    }
  }
};
