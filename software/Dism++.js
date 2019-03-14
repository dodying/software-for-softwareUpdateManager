'use strict'

let data = {
  url: 'http://www.chuyu.me/zh-Hans/index.html',
  version: {
    selector: '.subh2'
  },
  download: {
    selector: '.butt-holder a[href$=".zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
