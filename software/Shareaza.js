'use strict'

let data = {
  url: 'http://shareaza.sourceforge.net/?id=download',
  version: {
    selector: '.redHeaderLarger'
  },
  download: {
    selector: 'a[href$="x64.exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
