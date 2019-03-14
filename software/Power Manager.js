'use strict'

let data = {
  commercial: 3,
  url: 'https://www.apreltech.com/PowerManager',
  preferPath: 'pmgr.exe',
  version: {
    selector: 'h2'
  },
  download: {
    plain: 'https://www.apreltech.com/Downloads/PowerManagerSetup.msi'
  },
  install: function (output, iPath, fns) {
    return fns.install.msi(output, iPath, null, data.preferPath)
  }
}
module.exports = data
