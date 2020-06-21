'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/edrlab/thorium-reader/releases/latest'
  },
  versionChoice: '.exe',
  install: ['install_zipped', 'install', 'app-64.7z'],
  other: {
    beta: {
      site: {
        GitHub: 'https://github.com/edrlab/thorium-reader/releases'
      },
      versionChoice: ['.exe', null, null, 'published_at']
    }
  }
};
module.exports = data;
