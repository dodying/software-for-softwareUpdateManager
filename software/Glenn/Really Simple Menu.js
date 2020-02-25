'use strict'

let data = {
  url: 'https://www.glenn.delahoy.com/really-simple-menu/',
  version: ['.featured-artist', 'text', /Version: (.*)/],
  download: '[href$=".zip"]',
  install: 'install_zipped_single'
}
module.exports = data
