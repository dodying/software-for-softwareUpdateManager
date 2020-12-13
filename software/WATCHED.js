'use strict';

module.exports = {
  site: {
    download: 'https://www.watched.com/download'
  },
  versionChoice: ['https://www.watched.com/desktop/get/windows', /WATCHED Setup (.*?).exe/],
  install: ['install_zipped', 'install', 'app-64.7z']
};
