'use strict'

let data = {
  url: 'https://fotosketcher.com/download-fotosketcher/',
  version: {
    selector: 'h1+p',
    match: /FotoSketcher (.*?) \(/
  },
  download: {
    selector: 'a[href$="setup_64bit.exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.single(output, iPath)
  }
}
module.exports = data
