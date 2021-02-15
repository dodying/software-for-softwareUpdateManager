'use strict';

module.exports = {
  type: 'software-list',
  list: {
    cssh: {
      site: {
        GitHub: 'https://github.com/42wim/cssh/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    dt: {
      site: {
        GitHub: 'https://github.com/42wim/dt/releases/latest'
      },
      versionChoice: /.exe$/
    },
    gomphs: {
      site: {
        GitHub: 'https://github.com/42wim/gomphs/releases/latest'
      },
      versionChoice: 'amd64.exe',
      install: 'install_single'
    },
    matterbridge: {
      site: {
        GitHub: 'https://github.com/42wim/matterbridge/releases/latest'
      },
      versionChoice: 'windows-64bit.exe',
      install: 'install_single'
    }
  }
};
