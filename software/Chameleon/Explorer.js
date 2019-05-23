'use strict'

let data = {
  commercial: 3,
  url: 'http://www.chameleon-managers.com/windows-explorer/',
  version: {
    selector: '.wrap-right a[href$=".exe"]'
  },
  download: {
    plain: 'http://www.chameleon-managers.com/files/cexplorer.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath)
  }
}
module.exports = data
