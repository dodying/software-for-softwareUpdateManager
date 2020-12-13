'use strict';

module.exports = {
  url: 'https://tuya.xinxiao.tech/',
  version: ['#winDropdown>a', 'href', /%20([\d.]+).exe/],
  download: '#winDropdown>a',
  install: ['install_zipped', 'install', 'app-64.7z']
};
