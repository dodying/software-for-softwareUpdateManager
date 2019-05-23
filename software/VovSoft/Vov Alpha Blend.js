'use strict'

let data = {
  commercial: 3,
  url: 'https://vovsoft.com/software/vov-alpha-blend/',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'http://vovsoft.com/files/vov-alpha-blend.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
