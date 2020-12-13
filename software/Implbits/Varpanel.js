'use strict';

module.exports = {
  site: {
    chocolatey: 'https://chocolatey.org/packages/varpanel'
  },
  install: ['install_zipped', 'install_msi', 'tools\\\\.*.msi', null, 'varpanel.exe']
};
