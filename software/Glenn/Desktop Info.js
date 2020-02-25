'use strict'

let data = {
  url: 'https://www.glenn.delahoy.com/desktopinfo/',
  version: ['.featured-artist', 'text', /Version: (.*)/],
  download: '[href$=".zip"]',
  install: 'install'
}
module.exports = data
