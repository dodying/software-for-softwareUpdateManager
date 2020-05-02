'use strict';

const data = {
  tags: ['proxy'],
  useProxy: true,
  url: 'https://build.wireguard.com/distros.json',
  version: (res) => res.json['windowsdl-win'].version,
  download: 'https://download.wireguard.com/windows-client/wireguard-amd64-{version}.msi',
  install: ['install_msi', null, 'wireguard.exe']
};
module.exports = data;
