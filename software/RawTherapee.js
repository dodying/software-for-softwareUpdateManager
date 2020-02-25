'use strict'

let data = {
  url: 'https://www.rawtherapee.com/',
  version: ['[href$="64.zip"][href*="Win"]', 'href', /RawTherapee_(.*)_Win/],
  changelog: {
    url: '#intro [href^="/downloads/"]',
    selector: '#new-features+ul'
  },
  download: '[href$="64.zip"][href*="Win"]',
  install: ['install_zipped', 'install_inno']
}
module.exports = data
