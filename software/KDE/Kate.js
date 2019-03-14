'use strict'

let data = {
  url: 'https://mirrors.shu.edu.cn/kde/ftp/stable/kate/?C=N&O=D',
  version: {
    selector: 'a[href$="64bit.exe"]'
  },
  download: {
    selector: 'a[href$="64bit.exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
