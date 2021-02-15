'use strict';

module.exports = {
  type: 'software-list',
  list: {
    Keep: {
      site: {
        GitHub: 'https://github.com/andrepolischuk/keep/releases/latest'
      },
      versionChoice: 'windows-.*?.zip',
      install: 'install'
    },
    thomas: {
      site: {
        GitHub: 'https://github.com/andrepolischuk/thomas/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    }
  }
};
