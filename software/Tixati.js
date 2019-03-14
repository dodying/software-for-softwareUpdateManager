'use strict'

let data = {
  url: 'https://www.tixati.com/download/windows64.html',
  version: {
    selector: 'a[href$="install.exe"]'
  },
  download: {
    selector: 'a[href$="install.exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
