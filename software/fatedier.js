'use strict';

module.exports = {
  type: 'software-list',
  list: {
    fft: {
      site: {
        GitHub: 'https://github.com/fatedier/fft/releases/latest'
      },
      versionChoice: 'windows_amd64.zip',
      install: 'install'
    },
    frp: {
      site: {
        GitHub: 'https://github.com/fatedier/frp/releases/latest'
      },
      versionChoice: 'windows_amd64.zip',
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/fatedier/frp/releases'
          }
        }
      }
    }
  }
};
