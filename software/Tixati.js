'use strict';

module.exports = {
  type: 'software-list',
  list: {
    Fopnu: {
      url: 'https://www.fopnu.com/download/windows64.html',
      version: 'a[href$="install.exe"]',
      download: 'a[href$="install.exe"]',
      install: 'install_zipped_single'
    },
    Tixati: {
      url: 'https://www.tixati.com/download/windows64.html',
      version: 'a[href$="install.exe"]',
      download: 'a[href$="install.exe"]',
      install: 'install_zipped_single'
    }
  }
};
