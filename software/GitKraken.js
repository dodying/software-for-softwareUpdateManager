'use strict'

let data = {
  commercial: 1,
  url: 'https://support.gitkraken.com/release-notes/current/',
  version: '[id^="version"]',
  changelog: {
    selector: '.md-content',
    attr: 'text',
    match: /^Version [\d.]+/,
    split: true
  },
  download: 'https://release.gitkraken.com/win64/GitKrakenSetup.exe',
  install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
}
module.exports = data
