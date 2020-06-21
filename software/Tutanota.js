'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/tutao/tutanota/releases/latest'
  },
  versionChoice: {
    filter: i => !i.prerelease,
    match: 'tutanota-release-(.*)'
  },
  download: 'https://mail.tutanota.com/desktop/tutanota-desktop-win.exe',
  install: ['install_zipped', 'install', 'app-64.7z']
};
module.exports = data;
