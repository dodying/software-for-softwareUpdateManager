'use strict'

let data = {
  url: 'https://github.com/ukanth/monitores/releases/latest',
  version: {
    selector: '.release-header a'
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$=".zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  },
  other: {
    lite: {
      download: {
        selector: 'a[href*="/releases/download/"][href$="MonitorESLite.exe"]'
      },
      install: function (output, iPath, fns) {
        return fns.install.single(output, iPath)
      }
    }
  }
}
module.exports = data
