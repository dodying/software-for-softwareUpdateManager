'use strict'

let data = {
  commercial: 2,
  url: 'http://bjtime.cn/info/view.asp?id=159',
  version: {
    selector: 'a[href$=".exe"]'
  },
  download: {
    selector: 'a[href$=".exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.single(output, iPath)
  }
}
module.exports = data
