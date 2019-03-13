'use strict'

let data = {
  url: 'https://www.diskinternals.com/recovery-server/',
  version: {
    selector: '.divh5'
  },
  download: {
    plain: 'https://www.diskinternals.com/download/DiskInternals_Server.exe'
  },
  install: function (output, iPath) {
    return require('./../../js/install_single')(output, iPath)
  }
}
module.exports = data
