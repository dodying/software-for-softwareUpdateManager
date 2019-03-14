'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/bluetoothcl.html',
  version: {
    selector: '.utilcaption'
  },
  download: {
    plain: 'https://www.nirsoft.net/utils/bluetoothcl.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
