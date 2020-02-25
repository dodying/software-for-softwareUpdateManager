'use strict'

let data = {
  url: 'https://www.tightvnc.com/download.php',
  version: '.mgnol+h3',
  changelog: {
    url: 'https://www.tightvnc.com/whatsnew.php',
    selector: 'body > table:nth-child(7) > tbody > tr > td:nth-child(2) > table',
    attr: 'text',
    match: /^TightVNC [\d.]+/,
    split: true
  },
  download: '[href$="setup-64bit.msi"]',
  install: ['install_msi', null, 'tvnserver.exe']
}
module.exports = data
