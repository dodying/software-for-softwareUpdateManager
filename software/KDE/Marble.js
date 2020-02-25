'use strict'

let data = {
  url: 'https://marble.kde.org/install.php',
  version: 'a[href$="x64.exe"]',
  download: (res, $) => 'https://mirrors.ustc.edu.cn/kde-application' + new URL($('a[href$="x64.exe"]').eq(0).attr('href')).pathname,
  install: 'install_inno'
}
module.exports = data
