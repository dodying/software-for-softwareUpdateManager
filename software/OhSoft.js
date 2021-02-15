'use strict';

module.exports = {
  type: 'software-list',
  list: {
    oCam: {
      site: {
        'GitHub-code': 'https://github.com/ohsoft/archive/tree/master/ocam'
      },
      versionChoice: [null, /_v([\d.]+)_sign.exe/],
      install: 'install_inno'
    },
    SecretFolder: {
      site: {
        'GitHub-code': 'https://github.com/ohsoft/archive/tree/master/secretfolder'
      },
      versionChoice: [null, /_v([\d.]+)_sign.exe/],
      install: 'install_inno'
    },
    VirtualDVD: {
      site: {
        'GitHub-code': 'https://github.com/ohsoft/archive/tree/master/virtualdvd'
      },
      versionChoice: [null, /_v([\d.]+)_sign.exe/],
      install: 'install_inno'
    }
  }
};
