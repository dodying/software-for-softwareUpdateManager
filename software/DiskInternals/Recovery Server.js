'use strict'

let data = {
  url: 'https://www.diskinternals.com/recovery-server/',
  version: {
    selector: '.divh5'
  },
  download: {
    plain: 'https://www.diskinternals.com/download/DiskInternals_Server.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.single(output, iPath)
  }
}
module.exports = data
