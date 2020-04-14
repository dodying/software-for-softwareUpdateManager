'use strict';

const data = {
  url: 'http://mfiles.maokebing.com/',
  version: ['[href*="win8-later"][href$="green.rar"]', 'href', /mfiles-helper-(.*)-win/],
  download: '[href*="win8-later"][href$="green.rar"]',
  install: 'install'
};
module.exports = data;
