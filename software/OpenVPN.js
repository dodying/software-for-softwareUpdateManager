'use strict';

module.exports = {
  type: 'software-list',
  list: {
    OpenVPN: {
      useProxy: true,
      url: 'https://openvpn.net/community-downloads/',
      version: 'a[href$="Win10.exe"]',
      changelog: '.card-body',
      download: 'a[href$="Win10.exe"]',
      install: 'install_nsis'
    },
    'Private Tunnel': {
      commercial: 2,
      url: 'https://www.privatetunnel.com/apps/',
      version: ['a[href$=".msi"]', 'href'],
      download: 'a[href$=".msi"]',
      install: ['install_msi', null, 'PrivateTunnel.exe']
    }
  }
};
