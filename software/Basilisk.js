'use strict'

let data = {
  url: 'https://basilisk-browser.org/releasenotes.shtml',
  version: {
    selector: '.rn-header'
  },
  download: {
    plain: 'http://us.basilisk-browser.org/release/basilisk-latest.win64.installer.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath, null, 'core')
  }
}
module.exports = data
