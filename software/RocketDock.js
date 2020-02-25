'use strict'

let data = {
  url: 'https://punklabs.com/',
  version: ['[href^="/downloads/RocketDock-"][href$=".exe"]', 'href'],
  download: '[href^="/downloads/RocketDock-"][href$=".exe"]',
  install: 'install_inno_type'
}
module.exports = data
