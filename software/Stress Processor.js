'use strict'

let data = {
  commercial: 3,
  url: 'http://pylonos.com/sp/download',
  version: {
    selector: '.downloadBut',
    attr: 'href'
  },
  download: {
    selector: '.downloadBut'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
