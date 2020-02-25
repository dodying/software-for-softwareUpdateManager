'use strict'

let data = {
  commercial: 1,
  url: 'https://www.nurgo-software.com/company/news/13-aquasnap',
  version: '[href^="/company/news/"][title^="AquaSnap"]',
  changelog: '.article-intro>ul',
  download: 'https://www.nurgo-software.com/download/AquaSnap.msi',
  install: ['install_msi', null, 'AquaSnap.Configurator.exe']
}
module.exports = data
