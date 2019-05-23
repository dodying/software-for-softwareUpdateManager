'use strict'

let data = {
  commercial: 3,
  url: 'https://vovsoft.com/software/auto-change-screensavers/',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'http://vovsoft.com/files/auto-change-screensavers.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
