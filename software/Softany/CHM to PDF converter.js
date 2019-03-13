'use strict'

let data = {
  commercial: 3,
  url: 'http://www.softany.com/chm-to-pdf/download.htm',
  version: {
    selector: 'h1+table >tbody>tr:nth-child(2)>td:nth-child(2)'
  },
  download: {
    plain: 'http://download.softany.com/Softany-CHM-to-PDF-converter.exe'
  },
  install: function (output, iPath) {
    return require('./../../js/install_inno_single')(output, iPath, '.exe')
  }
}
module.exports = data
