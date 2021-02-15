'use strict';

module.exports = {
  type: 'software-list',
  list: {
    Quail: {
      site: {
        GitHub: 'https://github.com/1000ch/quail/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Whale: {
      site: {
        GitHub: 'https://github.com/1000ch/whale/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    }
  }
};
