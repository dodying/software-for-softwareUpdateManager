'use strict'

let data = {
  url: 'https://www.softwareok.com/?Download=AutoHideMouseCursor',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'https://www.softwareok.com/Download/AutoHideMouseCursor_x64_Portable.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
