'use strict'

let data = {
  url: 'https://community.kde.org/Amarok/GettingStarted/Download/Windows',
  version: {
    selector: '#toc+h2+p'
  },
  download: {
    plain: 'http://mirrors.shu.edu.cn/kde/ftp/stable/amarok/{version}/win32/amarok-x86-setup-{version}.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
