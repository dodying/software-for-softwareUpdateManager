'use strict'

let data = {
  url: 'https://www.mercurial-scm.org/wiki/Download',
  version: {
    selector: 'a[href$="x64.exe"]',
    attr: 'href'
  },
  download: {
    selector: 'a[href$="x64.exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
