'use strict';

module.exports = {
  url: 'https://chs.desktopcal.com/chs/',
  version: '.pcver',
  changelog: {
    url: 'https://chs.desktopcal.com/sdata/html/dialog_updatehistory_chs.html',
    selector: '.contentdiv>div:nth-child(4)>ul>li:nth-child(1)'
  },
  download: 'http://download.desktopcal.com/desktopcal-green.7z',
  install: 'install',
  other: {
    legacy: {
      url: 'https://www.deskwc.com/bundle.js',
      version: (res) => res.body.match(/\{ className: 'version' \},\n\s*'V([\d.]+)'/)[1],
      changelog: null,
      download: 'http://download.deskwc.com/weathercal-setup.exe',
      install: 'install_nsis'
    }
  }
};
