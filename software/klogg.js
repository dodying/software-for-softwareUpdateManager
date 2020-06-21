'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/variar/klogg/releases/latest'
  },
  versionChoice: '-x64-setup.exe',
  install: 'install_nsis',
  other: {
    beta: {
      site: {
        GitHub: 'https://github.com/variar/klogg/releases'
      },
      versionChoice: ['-x64-setup.exe', null, null, 'published_at']
    }
  }
};
module.exports = data;
