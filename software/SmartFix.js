'use strict';

module.exports = {
  url: 'https://smartfix.pro/Version.txt',
  version: (res) => res.body,
  download: 'https://smartfix.pro/SmartFix.exe',
  install: 'install_single'
};
