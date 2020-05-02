'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/readium/readium-desktop/releases/latest'
  },
  downloadChoice: '[href$=".exe"]',
  install: ['install_zipped', 'install', 'app-64.7z'],
  other: {
    prerelease: {
      site: {
        AppVeyor: 'https://ci.appveyor.com/api/projects/danielweck/readium-desktop'
      },
      downloadChoice: '.exe'
    }
  }
};
module.exports = data;
