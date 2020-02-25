'use strict'

let data = {
  url: 'https://www.makemkv.com/download/',
  version: '[href^="/download/Setup"][href$=".exe"]',
  changelog: 'h4:contains("Revision history")+li+ul',
  download: '[href^="/download/Setup"][href$=".exe"]',
  install: 'install_nsis'
}
module.exports = data
