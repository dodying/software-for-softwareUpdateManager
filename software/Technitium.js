'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'DNS Server': {
      url: 'https://technitium.com/dns/',
      version: '.download>h4',
      download: 'https://download.technitium.com/dns/DnsServerPortable.zip',
      install: 'install'
    },
    'MAC Address Changer': {
      url: 'https://technitium.com/tmac/',
      version: '.download>h4',
      download: '.download [href$=".zip"]'
    },
    Mesh: {
      url: 'https://mesh.im/',
      version: '.download>h4',
      download: 'https://download.technitium.com/mesh/MeshPortable.zip',
      install: 'install'
    }
  }
};
