'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'linx-client': {
      site: {
        GitHub: 'https://github.com/andreimarcu/linx-client/releases/latest'
      },
      versionChoice: 'windows-amd64.exe',
      install: 'install_single'
    },
    'linx-server': {
      site: {
        GitHub: 'https://github.com/andreimarcu/linx-server/releases/latest'
      },
      versionChoice: 'windows-amd64.exe',
      install: 'install_single'
    }
  }
};
