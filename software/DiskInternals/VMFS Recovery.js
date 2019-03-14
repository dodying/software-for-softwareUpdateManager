'use strict'

let data = {
  commercial: 3,
  url: 'https://www.diskinternals.com/vmfs-recovery/',
  version: {
    selector: 'a[download]+span'
  },
  download: {
    plain: 'https://www.diskinternals.com/download/VMFS_Recovery.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
