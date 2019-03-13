'use strict'

let data = {
  url: 'https://github.com/IceEnd/Yosoro/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /v(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href*="win32-x64"][href$=".zip"]'
  },
  install: function (output, iPath) {
    return require('./../js/install_zipped')(output, iPath, 'install_zipped', null, 'install', 'full.nupkg', null, 'lib\\net45')
  }
}
module.exports = data
