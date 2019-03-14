'use strict'

let data = {
  url: 'https://marble.kde.org/install.php',
  version: {
    selector: 'a[href$="x64.exe"]'
  },
  download: {
    func: async (res, $) => 'https://mirrors.shu.edu.cn/kde/files' + new URL($('a[href$="x64.exe"]').eq(0).attr('href')).pathname
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
