'use strict';

const data = {
  commercial: 3,
  url: 'https://www.passmark.com/products/monitortest.htm',
  version: ['#block_content .row h1~ul>li:last-child', 'text', /([\d.]+) \(Build (\d+)/, '$1.$2'],
  download: 'https://www.passmark.com/ftp/montest.exe',
  install: 'install_inno'
};
module.exports = data;
