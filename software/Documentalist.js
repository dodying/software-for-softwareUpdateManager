'use strict';

module.exports = {
  url: 'https://www.documentalist.io/',
  version: ['#dlurl', 'href', /installer-(.*?).exe/],
  download: '#dlurl',
  install: 'install_single'
};
