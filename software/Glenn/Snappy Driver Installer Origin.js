'use strict'

let data = {
  url: 'https://www.snappy-driver-installer.org/download/',
  version: ['[href*="downloads/SDIO"][href$=".zip"]', 'href'],
  changelog: {
    url: 'https://snappy-driver-installer.org/downloads/changelog.txt',
    match: /^Version [\d.]+/,
    split: true
  },
  download: '[href*="downloads/SDIO"][href$=".zip"]',
  install: 'install'
}
module.exports = data
