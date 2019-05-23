'use strict'

let data = {
  commercial: 3,
  url: 'https://www.syncovery.com/download/windows/',
  version: {
    selector: 'a[href$=".exe"]'
  },
  download: {
    plain: 'https://www.syncovery.com/release/Syncovery64Setup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
