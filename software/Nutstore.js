'use strict'

let data = {
  url: 'https://www.jianguoyun.com/s/downloads',
  version: {
    selector: '.require'
  },
  download: {
    plain: 'https://www.jianguoyun.com/static/exe/installer/NutstoreWindowsInstaller.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.ai(output, iPath)
  }
}
module.exports = data
