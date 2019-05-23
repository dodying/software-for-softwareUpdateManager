'use strict'

let data = {
  url: 'https://geekuninstaller.com/download',
  version: {
    selector: 'h1+b'
  },
  download: {
    plain: 'https://geekuninstaller.com/geek.7z'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
