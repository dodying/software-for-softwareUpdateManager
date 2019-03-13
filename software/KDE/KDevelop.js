'use strict'

let data = {
  url: 'https://www.kdevelop.org/download',
  version: {
    selector: 'a[href$="x64-setup.exe"]'
  },
  download: {
    func: async (res, $) => 'https://mirrors.shu.edu.cn/kde/ftp' + new URL($('a[href$="x64-setup.exe"]').eq(0).attr('href')).pathname
  },
  install: function (output, iPath) {
    return require('./../../js/install_zipped')(output, iPath, 'install', '.7z')
  }
}
module.exports = data
