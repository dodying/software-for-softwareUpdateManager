'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/billziss-gh/winfsp/releases/latest'
  },
  versionChoice: '.msi',
  install: ['install_msi', null, 'bin/launcher-x64.exe'],
  other: {
    beta: {
      site: {
        GitHub: 'https://github.com/billziss-gh/winfsp/releases'
      }
    }
  }
};
module.exports = data;
