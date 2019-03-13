'use strict'

let data = {
  url: 'https://docs.microsoft.com/zh-cn/sysinternals/downloads/psinfo',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'https://download.sysinternals.com/files/PSTools.zip'
  },
  install: function (output, iPath) {
    return require('./../../js/install')(output, iPath)
  }
}
module.exports = data
