'use strict'

let data = {
  url: 'https://github.com/dscharrer/innoextract/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$="windows.zip"]'
  },
  install: function (output, iPath) {
    return require('./../js/install_zipped_single')(output, iPath, 'innoextract.exe')
  }
}
module.exports = data
