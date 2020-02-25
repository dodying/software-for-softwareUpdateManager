'use strict'

let data = {
  url: 'https://krita.org/en/download/krita-desktop/',
  version: ['#sixty-four-bit-windows-installer', 'href'],
  download: (res, $) => 'https://mirrors.ustc.edu.cn/kde' + new URL($('#sixty-four-bit-windows-installer').eq(0).attr('href')).pathname,
  install: 'install_nsis'
}
module.exports = data
