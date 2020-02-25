'use strict'

let data = {
  url: 'https://www.glenn.delahoy.com/desktopcalendar/',
  version: ['.featured-artist', 'text', /Version: (.*)/],
  download: '[href$=".zip"]',
  install: 'install'
}
module.exports = data
