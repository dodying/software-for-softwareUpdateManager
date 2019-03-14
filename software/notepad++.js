'use strict'

let data = {
  url: 'https://notepad-plus-plus.org/download/',
  version: {
    selector: 'h1'
  },
  download: {
    selector: 'a[href$="x64.7z"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
