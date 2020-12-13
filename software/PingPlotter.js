'use strict';

module.exports = {
  commercial: 3,
  url: 'https://www.pingplotter.com/download/release-highlights',
  version: '.page-content>div:nth-child(2) h3',
  changelog: {
    selector: '.page-content>div:nth-child(2)',
    attr: 'text',
    match: /^PingPlotter [\d.]+/,
    split: true
  },
  download: 'http://www.pingplotter.com/downloads/pingplotter_install.exe',
  install: ['install_zipped', 'install_msi', '$_4_', null, 'PingPlotter.exe']
};
