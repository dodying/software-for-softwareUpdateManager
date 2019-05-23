'use strict'

let data = {
  url: 'https://vovsoft.com/software/match-pairs/',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'http://vovsoft.com/files/match-pairs.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
