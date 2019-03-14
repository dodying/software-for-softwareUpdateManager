'use strict'

let data = {
  url: 'https://docs.microsoft.com/zh-cn/sysinternals/downloads/adrestore',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'https://download.sysinternals.com/files/ADRestore.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
