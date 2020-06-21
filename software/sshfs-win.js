'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/billziss-gh/sshfs-win/releases/latest'
  },
  versionChoice: '-x64.msi',
  install: ['install_msi', null, 'bin/sshfs.exe'],
  other: {
    beta: {
      site: {
        GitHub: 'https://github.com/billziss-gh/sshfs-win/releases'
      }
    }
  }
};
module.exports = data;
