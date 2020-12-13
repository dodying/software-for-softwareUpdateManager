'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/vector-im/element-web/releases/latest'
  },
  versionChoice: i => !i.prerelease,
  download: 'https://packages.riot.im/desktop/install/win32/x64/Element%20Setup.exe',
  install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
};
module.exports = data;
