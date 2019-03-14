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
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install')
  }
}
module.exports = data
