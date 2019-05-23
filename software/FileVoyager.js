'use strict'

let data = {
  url: 'https://www.filevoyager.com/download/',
  version: {
    selector: 'a[href$="Full.7z"]'
  },
  download: {
    selector: 'a[href$="Full.7z"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
