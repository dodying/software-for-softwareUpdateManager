'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'AriaNg-Native': {
      site: {
        GitHub: 'https://github.com/mayswind/AriaNg-Native/releases/latest'
      },
      versionChoice: 'Windows-x64.7z',
      install: 'install'
    },
    AriaNg: {
      site: {
        GitHub: 'https://github.com/mayswind/AriaNg/releases/latest'
      },
      versionChoice: '-AllInOne.zip',
      install: ['install_zipped_single', 'index.html']
    }
  }
};
