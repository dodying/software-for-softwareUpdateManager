'use strict'

let data = {
  commercial: 3,
  url: 'http://www.softany.com/chm-to-doc/download.htm',
  version: {
    selector: 'h1+table >tbody>tr:nth-child(2)>td:nth-child(2)'
  },
  download: {
    plain: 'http://download.softany.com/Softany-CHM-to-DOC-converter.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.single(output, iPath, '.exe')
  }
}
module.exports = data
