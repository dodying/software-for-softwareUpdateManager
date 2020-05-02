'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/BoostIO/boost-releases/releases/latest'
  },
  downloadChoice: '[href$="full.nupkg"]',
  install: ['install', null, 'lib\\net*'],
  other: {
    next: {
      site: {
        GitHub: 'https://github.com/BoostIO/BoostNote.next/releases/latest'
      },
      downloadChoice: '[href$="win.exe"]',
      install: ['install_zipped', 'install', 'app-64.7z']
    }
  }
};
module.exports = data;
