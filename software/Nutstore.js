'use strict'

let data = {
  url: 'https://www.jianguoyun.com/s/downloads',
  version: {
    selector: '.require'
  },
  download: {
    plain: 'https://www.jianguoyun.com/static/exe/installer/NutstoreWindowsInstaller.exe'
  },
  fixedPath: '%ProgramFiles%\\Nutstore\\Nutstore.exe',
  install: function (output, iPath, fns) {
    return fns.install.ai.cli(output, iPath)
  }
}
module.exports = data
