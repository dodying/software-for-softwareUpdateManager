'use strict';

const data = {
  url: 'https://pnggauntlet.com/',
  version: ['.downloadlink', 'href', /PNGGauntlet-([\d.]+).exe/],
  download: '.downloadlink',
  install: ['install_zipped', 'install_msi', '.msi', null, 'PngGauntlet.exe']
};
module.exports = data;
