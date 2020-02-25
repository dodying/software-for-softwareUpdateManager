'use strict'

let data = {
  url: 'https://www.kdevelop.org/download',
  version: 'a[href$="x64-setup.exe"]',
  download: (res, $) => 'https://mirrors.ustc.edu.cn/kde' + new URL($('a[href$="x64-setup.exe"]').eq(0).attr('href')).pathname,
  installType: 'nsis',
  install: ['install_zipped', 'install', '.7z']
}
module.exports = data
