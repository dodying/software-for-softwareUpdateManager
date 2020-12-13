'use strict';

module.exports = {
  site: {
    GitHub: 'https://github.com/containerd/containerd/releases/latest'
  },
  versionChoice: 'containerd-(.*?)-windows-amd64.tar.gz',
  install: ['install_zipped', 'install'],
  other: {
    nightly: {
      site: {
        'GitHub-actions': 'https://github.com/containerd/containerd/releases/latest'
      },
      versionChoice: 'windows_amd64',
      install: 'install'
    }
  }
};
