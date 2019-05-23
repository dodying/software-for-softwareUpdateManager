'use strict'

let data = {
  url: 'https://www.softpedia.com/get/IPOD-TOOLS/Other-IPOD-tools-Updates/iTunes.shtml',
  preferPath: 'iTunes.exe',
  version: {
    selector: '.dllabel+span'
  },
  download: {
    plain: 'https://www.apple.com/itunes/download/win64'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install_msi', 'iTunes64.msi', null, data.preferPath)
  }
}
module.exports = data
