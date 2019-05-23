'use strict'

let data = {
  url: 'http://www.ch-software.de/popman/download.htm',
  version: {
    selector: 'a[href$=".exe"]'
  },
  download: {
    plain: 'http://www.ch-software.de/popman/download/PopMan.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
