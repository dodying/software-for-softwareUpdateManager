'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/BoostIO/boost-releases/releases/latest'
  },
  versionChoice: 'full.nupkg',
  install: ['install', null, 'lib\\net*'],
  other: {
    next: {
      site: {
        GitHub: 'https://github.com/BoostIO/BoostNote.next/releases/latest'
      },
      versionChoice: 'win.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    }
  }
};
module.exports = data;
