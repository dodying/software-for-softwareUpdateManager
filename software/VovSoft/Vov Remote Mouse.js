'use strict'

let data = {
  url: 'https://vovsoft.com/software/vov-remote-mouse/',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'http://vovsoft.com/files/vov-remote-mouse.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
