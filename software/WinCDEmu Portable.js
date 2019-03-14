'use strict'

let data = {
  url: 'http://wincdemu.sysprogs.org/portable/',
  version: {
    selector: '.download_button',
    attr: 'href'
  },
  download: {
    selector: '.download_button'
  },
  install: function (output, iPath, fns) {
    return fns.install.single(output, iPath)
  }
}
module.exports = data
