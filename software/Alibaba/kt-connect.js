'use strict';

module.exports = {
  site: {
    GitHub: 'https://github.com/alibaba/kt-connect/releases/latest'
  },
  versionChoice: 'kubectl-connect_.*?_windows_amd64.tar.gz',
  install: ['install_zipped', 'install_zipped_single'],
  other: {
    ktctl: {
      versionChoice: 'ktctl_.*?_windows_amd64.tar.gz'
    }
  }
};
