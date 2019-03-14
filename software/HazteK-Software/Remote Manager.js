'use strict'

let data = {
  url: 'https://updates.haztek-software.com/changes.php?appid=8',
  version: {
    selector: 'h1+div+div'
  },
  download: {
    plain: 'https://www.haztek-software.com/files/RemoteManager.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
