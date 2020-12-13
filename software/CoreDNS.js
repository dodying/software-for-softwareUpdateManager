'use strict';

module.exports = {
  site: {
    GitHub: 'https://github.com/coredns/coredns/releases/latest'
  },
  versionChoice: /windows_amd64.tgz$/,
  downloadChoice: [/windows_amd64.tgz$/, '.tgz'],
  install: ['install_zipped', 'install_zipped_single']
};
