'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Popcorn Time': {
      site: {
        GitHub: 'https://github.com/amilajack/popcorn-time-desktop/releases/latest'
      },
      versionChoice: '.exe$',
      install: ['install_zipped', 'install', 'app-64.7z']
    }
  }
};
