'use strict'

let data = {
  url: 'http://www.bitdock.cn/',
  version: {
    selector: '.aside-info',
    match: /v(.*?)版/
  },
  download: {
    selector: '.green-download'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
