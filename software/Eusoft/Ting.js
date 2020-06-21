'use strict';

module.exports = {
  commercial: 2,
  url: 'https://www.eudic.net/v4/en/app/ting',
  version: ['.linkTingBtn>a', 'href', /\?ver=(.*?)($|&)/],
  changelog: ['https://www.eudic.net/v4/en/app/history?appkey=eusoft_ting_en', '.commonDivRight>p'],
  download: '.linkTingBtn>a',
  install: ['install_zipped', 'install_zipped', '.exe', 'install', '.7z$']
};
