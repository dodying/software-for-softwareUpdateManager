'use strict';

module.exports = {
  url: 'https://muwire.com/',
  version: (res) => res.body.match(/var VERSION="(.*?)"/)[1],
  download: 'https://muwire.com/MuWire-{version}.exe',
  install: 'install_nsis'
};
