'use strict'

let data = {
  url: 'https://www.softwareok.com/?Download=Q-Dir',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'https://www.softwareok.com/Download/Q-Dir_Portable_x64.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
