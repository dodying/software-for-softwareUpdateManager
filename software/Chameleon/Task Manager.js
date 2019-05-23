'use strict'

let data = {
  commercial: 3,
  url: 'http://www.chameleon-managers.com/windows-task-manager/',
  version: {
    selector: '.wrap-right a[href$=".exe"]'
  },
  download: {
    plain: 'http://www.chameleon-managers.com/files/ctask.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.single(output, iPath)
  }
}
module.exports = data
