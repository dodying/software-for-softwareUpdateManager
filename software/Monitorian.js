'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/emoacht/Monitorian/releases/latest'
  },
  versionChoice: ['.zip$', /(.*)-Installer/],
  install: ['install_zipped', 'install_msi', '.msi', null, 'Monitorian.exe']
};
module.exports = data;
