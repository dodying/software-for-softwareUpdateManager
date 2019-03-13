'use strict'

let data = {
  url: 'https://github.com/t3rm1n4l/megacmd/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$="windows_amd64.zip"]'
  },
  install: function (output, iPath) {
    return require('./../js/install_zipped_single')(output, iPath)
  }
}
module.exports = data
