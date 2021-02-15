'use strict';

module.exports = {
  type: 'software-list',
  list: {
    图压: {
      url: 'https://tuya.xinxiao.tech/',
      version: ['#winDropdown>a', 'href', /%20([\d.]+).exe/],
      download: '#winDropdown>a',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    多少记账: {
      url: 'https://duoshao.net/',
      version: ['.download-btn>a[href$=".exe"]', 'href', /Duoshao-Setup-(.*?).exe/],
      download: '.download-btn>a[href$=".exe"]',
      install: ['install_zipped', 'install', 'app-64.7z']
    }
  }
};
