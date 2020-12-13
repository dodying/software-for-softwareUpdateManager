'use strict';

const data = {
  commercial: 3,
  url: 'https://www.wincatalog.com/download.html',
  version: '.card-body>p+p',
  download: async (res, $, fns, choice) => fns.walkLink('https://www.wincatalog.com/thankyou.html', fns, '[href$="setup.exe"]'),
  install: 'install_inno'
};
module.exports = data;
