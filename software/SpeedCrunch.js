'use strict'

let data = {
  url: 'http://speedcrunch.org/download.html',
  version: {
    selector: 'h1'
  },
  download: {
    selector: '.dl-button[href$="win32.exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
