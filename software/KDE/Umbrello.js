'use strict'

let data = {
  url: 'https://mirrors.shu.edu.cn/kde/ftp/stable/umbrello/latest/win64/',
  version: {
    selector: 'a[href$="bin.7z"]',
    match: /mingw32-(.*)-bin/
  },
  download: {
    selector: 'a[href$="bin.7z"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
