'use strict'

let data = {
  url: 'https://www.softwareok.com/?Download=LauschAngriff',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'https://www.softwareok.com/Download/LauschAngriff.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
