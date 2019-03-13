'use strict'

let data = {
  commercial: 3,
  url: 'http://www.softany.com/winchm/download.htm',
  version: {
    selector: 'h1+table >tbody>tr:nth-child(2)>td:nth-child(2)'
  },
  download: {
    plain: 'http://download.softany.com/WinCHM_setup.exe'
  },
  install: function (output, iPath) {
    return require('./../../js/install_inno')(output, iPath)
  }
}
module.exports = data