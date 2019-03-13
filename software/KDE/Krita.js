'use strict'

let data = {
  url: 'https://krita.org/en/download/krita-desktop/',
  version: {
    selector: '#sixty-four-bit-windows-installer',
    attr: 'href'
  },
  download: {
    func: async (res, $) => 'https://mirrors.shu.edu.cn/kde/ftp' + new URL($('#sixty-four-bit-windows-installer').eq(0).attr('href')).pathname
  },
  install: function (output, iPath) {
    return require('./../../js/install')(output, iPath)
  }
}
module.exports = data
