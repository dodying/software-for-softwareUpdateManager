'use strict'

let data = {
  url: 'https://privazer.com/download.php',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'https://privazer.com/PrivaZer.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.single(output, iPath)
  }
}
module.exports = data
