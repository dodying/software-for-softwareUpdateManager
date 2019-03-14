'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/volumouse.html',
  version: {
    selector: '.utilcaption'
  },
  download: {
    plain: 'https://www.nirsoft.net/utils/volumouse-x64.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath, 'volumouse.exe')
  }
}
module.exports = data
