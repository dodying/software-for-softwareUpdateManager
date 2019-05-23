'use strict'

let data = {
  url: 'https://vovsoft.com/software/random-wordlist-generator/',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'http://vovsoft.com/files/random-wordlist-generator.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
