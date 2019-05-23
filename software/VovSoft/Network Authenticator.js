'use strict'

let data = {
  url: 'https://vovsoft.com/software/network-authenticator/',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'http://vovsoft.com/files/network-authenticator.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
