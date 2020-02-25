'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/henrypp/chromium/releases'
  },
  versionChoice: /v(.*)-win64/,
  downloadChoice: '[href$=".exe"]',
  install: ['install_zipped', 'install']
}
module.exports = data
