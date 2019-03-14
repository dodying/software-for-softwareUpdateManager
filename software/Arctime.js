'use strict'

let data = {
  commercial: 2,
  url: 'https://arctime.org/download.html',
  version: {
    selector: '#u6872-2'
  },
  download: {
    plain: 'https://t.arctime.cn/ap2w64'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
