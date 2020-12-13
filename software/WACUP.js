'use strict';

module.exports = {
  url: 'https://getwacup.com/preview/',
  version: '#download+div>a[href$=".exe"]',
  changelog: {
    url: '#download+div+div>a[href^="./preview"]',
    selector: 'body>.container-fluid'
  },
  download: '#download+div>a[href$=".exe"]',
  install: 'install_nsis'
};
