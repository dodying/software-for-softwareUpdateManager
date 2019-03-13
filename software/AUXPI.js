'use strict'

let data = {
  url: 'https://github.com/aimerforreimu/AUXPI/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$="Windows.tar.gz"]',
    outout: '.tar.gz'
  },
  install: function (output, iPath) {
    return require('./../js/install_zipped')(output, iPath, 'install')
  }
}
module.exports = data
