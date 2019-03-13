'use strict'

let data = {
  commercial: 3,
  url: 'https://www.diskinternals.com/ntfs-recovery/',
  version: {
    selector: '.divh5'
  },
  download: {
    plain: 'https://www.diskinternals.com/download/Ntfs_Recovery.exe'
  },
  install: function (output, iPath) {
    return require('./../../js/install')(output, iPath)
  }
}
module.exports = data