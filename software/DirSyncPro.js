'use strict'

let data = {
  withoutHeader: true,
  url: 'https://www.dirsyncpro.org/download.html',
  version: {
    selector: 'a[href$="Windows.zip"]'
  },
  download: {
    selector: 'a[href$="Windows.zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
