'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'apex-shell': {
      site: {
        GitHub: 'https://github.com/apex/apex-shell/releases/latest'
      },
      versionChoice: 'windows_amd64.exe',
      install: 'install_single'
    },
    apex: {
      site: {
        GitHub: 'https://github.com/apex/apex/releases/latest'
      },
      versionChoice: 'windows_amd64.tar.gz',
      install: ['install_zipped', 'install_zipped_single']
    },
    up: {
      site: {
        GitHub: 'https://github.com/apex/up/releases/latest'
      },
      versionChoice: 'windows_amd64.tar.gz',
      install: ['install_zipped', 'install_zipped_single']
    }
  }
};
