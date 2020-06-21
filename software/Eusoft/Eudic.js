'use strict';

module.exports = {
  commercial: 2,
  url: 'https://www.eudic.net/v4/en/app/download',
  version: ['.product_window>div>a', 'href', /\?v=(.*?)($|&)/],
  changelog: ['https://www.eudic.net/v4/en/app/history?appkey=eusoft_eudic_en', '.commonDivRight>p'],
  download: '.product_window>div>a',
  install: ['install_zipped', 'install_zipped', '.exe', 'install', '.7z$']
};
