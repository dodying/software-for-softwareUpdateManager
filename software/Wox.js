'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/Wox-launcher/Wox/releases/latest'
  },
  versionChoice: 'Wox-(.*).exe',
  install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*'],
  other: {
    beta: {
      site: {
        GitHub: 'https://github.com/Wox-launcher/Wox/releases'
      }
    }
  }
};
module.exports = data;
