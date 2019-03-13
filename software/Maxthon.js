'use strict'

let data = {
  url: 'http://www.maxthon.cn/mx5/changelog/',
  version: {
    selector: 'h2'
  },
  download: {
    plain: 'http://www.maxthon.cn/mx5/portable/dl'
  },
  install: function (output, iPath) {
    return require('./../js/install')(output, iPath)
  }
}
module.exports = data
