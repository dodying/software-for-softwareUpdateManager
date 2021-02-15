'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'YouTube Music': {
      site: {
        GitHub: 'https://github.com/th-ch/youtube-music/releases/latest'
      },
      versionChoice: '.exe$',
      install: ['install_zipped', 'install', 'app-64.7z']
    }
  }
};
