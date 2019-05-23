'use strict'

let data = {
  commercial: 3,
  url: 'http://pylonos.com/omega/download',
  version: {
    selector: '.downloadBut',
    attr: 'href'
  },
  download: {
    selector: '.downloadBut'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath, null, '2')
  }
}
module.exports = data
