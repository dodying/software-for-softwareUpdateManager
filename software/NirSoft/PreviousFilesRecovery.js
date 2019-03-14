'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/previous_files_recovery.html',
  version: {
    selector: '.utilcaption'
  },
  download: {
    plain: 'https://www.nirsoft.net/utils/previousfilesrecovery-x64.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
