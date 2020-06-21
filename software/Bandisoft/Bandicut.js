'use strict';

const data = {
  commercial: 2,
  url: 'https://www.bandicam.com/bandicut-video-cutter/download/',
  version: '.keyword[href$="/ing/"]',
  changelog: ['https://www.bandicam.com/bandicut-video-cutter/history/', '.container>ul'],
  download: 'https://dl.bandicam.com/bandicut/bandicut-setup.exe',
  install: 'install_nsis',
  other: {
    beta: {
      version: '[href$="/dl.php?beta"]',
      changelog: null,
      download: 'https://dl.bandicam.com/bandicut/bandicut-setup-beta.exe'
    },
    old: {
      version: '.keyword[href$="/dl.php?old"]',
      changelog: null,
      download: 'https://dl.bandicam.com/bandicut/bandicut-setup-old.exe'
    }
  }
};
module.exports = data;
