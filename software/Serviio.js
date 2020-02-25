'use strict'

let data = {
  commercial: 2,
  url: 'https://www.serviio.org/download',
  version: '[href$="win-setup.exe"]',
  changelog: {
    url: '[href^="/download/"][href*="release-notes"]',
    selector: '.item-page'
  },
  download: '[href$="win-setup.exe"]',
  install: 'install_nsis'
}
module.exports = data
