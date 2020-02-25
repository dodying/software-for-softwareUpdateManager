'use strict'

let data = {
  commercial: 3,
  url: 'https://maxto.net/en/release/stable',
  version: '.card-title',
  changelog: '.card-body>ul',
  download: '.card-body>a[href$="Setup.exe"]',
  install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*'],
  other: {
    beta: {
      url: 'https://maxto.net/en/release/beta'
    },
    alpha: {
      url: 'https://maxto.net/en/release/alpha'
    }
  }
}
module.exports = data
