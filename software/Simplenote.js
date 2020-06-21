'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/Automattic/simplenote-electron/releases/latest'
  },
  versionChoice: 'win(.*).exe',
  install: ['install_zipped', 'install', 'app-64.7z'],
  other: {
    beta: {
      site: {
        GitHub: 'https://github.com/Automattic/simplenote-electron/releases'
      }
    }
  }
};
module.exports = data;
