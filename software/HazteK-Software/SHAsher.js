'use strict'

let data = {
  url: 'https://updates.haztek-software.com/changes.php?appid=6',
  version: {
    selector: 'h1+div+div'
  },
  download: {
    plain: 'https://www.haztek-software.com/files/SHAsher.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
