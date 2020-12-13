'use strict';

const data = {
  url: 'http://www.qvevideo.com/converter',
  version: ['.download>a', 'href', /QveVideoConverter-(.*?).exe/],
  download: '.download>a',
  install: 'install_nsis'
};
module.exports = data;
