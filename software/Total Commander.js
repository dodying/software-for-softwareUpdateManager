'use strict'

let data = {
  commercial: 2,
  url: 'https://www.ghisler.com/download.htm',
  version: ['h3', 'text', /version (.*) of/],
  changelog: {
    url: 'https://www.ghisler.com/history.txt',
    match: /^[\d.]+ Release Total Commander/,
    split: true
  },
  download: 'a[href$="x64.exe"]',
  install: ['install_zipped', 'install', 'INSTALL.CAB']
}
module.exports = data
