'use strict';

module.exports = {
  url: 'http://www.theworld.cn/',
  version: ['.redown', 'href', /TWInst_(.*?).exe/],
  download: '.redown',
  install: ['install_zipped', 'install'],
  other: {
    6: {
      version: ['.download-tw6', 'href', /TWInst_(.*?).exe/],
      download: '.download-tw6'
    },
    legacy: {
      url: 'http://www.theworld.cn/twen/get.html?lang=en&format=exe',
      version: ['#clickToDownload', 'href', /TheWorld_en_(.*?).exe/],
      download: '#clickToDownload',
      install: 'install_nsis'
    }
  }
};
