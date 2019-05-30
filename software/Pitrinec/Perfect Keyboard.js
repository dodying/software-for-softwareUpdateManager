'use strict'

let data = {
  commercial: 2,
  url: 'http://macrotoolworks.com/products/perfect-keyboard',
  version: {
    selector: '#mtwtab3>h3'
  },
  download: {
    plain: 'http://www.mtwfiles.cz/downloads/latest/pk_pro.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath)
  }
}
module.exports = data
