'use strict';

const data = {
  commercial: 3,
  url: 'https://batterybarpro.com/basic.php',
  version: ['[href$=".exe"]', 'href', /BatteryBarSetup-([\d.]+).exe/],
  download: '[href$=".exe"]',
  install: 'install_nsis'
};
module.exports = data;
