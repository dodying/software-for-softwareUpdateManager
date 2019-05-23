'use strict'

let data = {
  url: 'http://www.linuxliveusb.com/en/download',
  version: {
    selector: '.dl-detail'
  },
  download: {
    plain: 'http://www.linuxliveusb.com/downloads/?stable'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
