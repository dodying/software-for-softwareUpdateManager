'use strict';

module.exports = {
  commercial: 1,
  url: 'http://implbits.com/products/hashtab/',
  version: ['#btn_download_now', 'href', /HashTab_v(.*?)_Setup.exe/],
  download: '#btn_download_now',
  install: ['install_zipped_single', '$R0'],
  other: {
    32: {
      install: ['install_zipped_single', 'HashTab32-.*?.dll']
    }
  }
};
