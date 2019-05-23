'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/nircmd.html',
  version: {
    selector: '.utilcaption'
  },
  download: {
    plain: 'https://www.nirsoft.net/utils/nircmd-x64.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath, 'nircmd.exe')
  },
  other: {
    cli: {
      install: function (output, iPath, fns) {
        return fns.install.zipped.single(output, iPath, 'nircmdc.exe')
      }
    }
  }
}
module.exports = data
