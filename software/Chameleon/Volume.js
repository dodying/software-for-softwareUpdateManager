'use strict'

let data = {
  commercial: 3,
  url: 'http://www.chameleon-managers.com/windows-volume-manager/',
  version: {
    selector: '.wrap-right a[href$=".exe"]'
  },
  download: {
    plain: 'http://www.chameleon-managers.com/files/cvolume.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
