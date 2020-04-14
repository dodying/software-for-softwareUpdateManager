'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/happypandax/happypandax/releases/latest'
  },
  downloadChoice: '[href$=".exe"]',
  install: 'install',
  other: {
    desktop: {
      site: {
        GitHub: 'https://github.com/happypandax/desktop/releases/latest'
      },
      downloadChoice: '[href$=".exe"]',
      install: ['install_zipped', 'install', 'app-64.7z']
    }
  }
};
module.exports = data;
