'use strict';

module.exports = {
  type: 'software-list',
  list: {
    Centaury: {
      site: {
        GitHub: 'https://github.com/Feodor2/Centaury/releases/latest'
      },
      versionChoice: 'win64.installer.exe',
      install: ['install', null, 'core']
    },
    Mypal: {
      site: {
        GitHub: 'https://github.com/Feodor2/Mypal/releases/latest'
      },
      versionChoice: 'win64.installer.exe',
      install: ['install', null, 'core']
    }
  }
};
