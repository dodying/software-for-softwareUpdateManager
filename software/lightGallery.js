'use strict'

let data = {
  url: 'https://github.com/sachinchoolur/lightgallery-desktop/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$="windows.zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install')
  }
}
module.exports = data
