'use strict'

let data = {
  url: 'https://launcher.nirsoft.net/downloads/index.html',
  version: ['[href$=".zip"][href*="nirsoft_package"]', 'href'],
  download: '[href$=".zip"][href*="nirsoft_package"]',
  install: 'install'
}
module.exports = data
