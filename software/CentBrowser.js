'use strict'

let data = {
  url: 'https://www.centbrowser.cn/history.html',
  version: {
    selector: '.list>p',
    attr: 'id'
  },
  download: {
    selector: '.list a[href$="x64_portable.exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
