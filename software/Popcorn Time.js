'use strict';

const data = {
  url: 'https://getpopcorntime.is/windows.html',
  version: '.sub>b',
  download: 'https://dl.getpopcorntime.is/PopcornTime-latest.exe',
  install: ['install_inno', null, { '{pf32}': '{dir}' }]
};
module.exports = data;
