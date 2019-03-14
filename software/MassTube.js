'use strict'

let data = {
  commercial: 2,
  url: 'http://www.havysoft.cl/descargar.html',
  version: {
    selector: '#principal > table:nth-child(6) > tbody > tr:nth-child(2) > td:nth-child(2)'
  },
  download: {
    plain: 'http://www.masstube.cl/download/MT_Install.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install_inno')
  }
}
module.exports = data
