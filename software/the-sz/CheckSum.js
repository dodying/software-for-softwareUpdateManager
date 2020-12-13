'use strict';

const data = {
  url: 'http://www.the-sz.com/products/checksum/',
  version: ['[itemprop="softwareVersion"]', 'text', /(.*)/],
  download: 'http://www.the-sz.com/common/get.php?product=checksum',
  install: 'install_zipped_single'
};
module.exports = data;
