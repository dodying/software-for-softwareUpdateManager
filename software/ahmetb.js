'use strict';

module.exports = {
  type: 'software-list',
  list: {
    govvv: {
      site: {
        GitHub: 'https://github.com/ahmetb/govvv/releases/latest'
      },
      versionChoice: 'windows_amd64.exe',
      install: 'install_single'
    },
    'kubectl tree': {
      site: {
        GitHub: 'https://github.com/ahmetb/kubectl-tree/releases/latest'
      },
      versionChoice: 'windows_amd64.tar.gz',
      install: ['install_zipped', 'install_zipped_single']
    },
    kubectx: {
      site: {
        GitHub: 'https://github.com/ahmetb/kubectx/releases/latest'
      },
      versionChoice: 'kubectx_.*_windows_x86_64.zip',
      install: 'install',
      other: {
        kubens: {
          versionChoice: 'kubens_.*_windows_x86_64.zip'
        }
      }
    }
  }
};
