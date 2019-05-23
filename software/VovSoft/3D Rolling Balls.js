'use strict'

let data = {
  url: 'https://vovsoft.com/software/3d-rolling-balls/',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'http://vovsoft.com/files/3d-rolling-balls.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
