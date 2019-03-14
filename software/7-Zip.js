'use strict'

let data = {
  url: 'https://www.7-zip.org/download.html',
  version: {
    selector: 'h1+p'
  },
  download: {
    selector: '.Item>a[href$="x64.exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
