'use strict'

let data = {
  url: 'https://www.aignes.com/deadlink.htm#',
  version: {
    selector: '.mobile .medium'
  },
  download: {
    plain: 'https://www.aignes.info/download/dlsetup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
