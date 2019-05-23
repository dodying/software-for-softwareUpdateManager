'use strict'

let data = {
  url: 'https://www.softpedia.com/get/IPOD-TOOLS/Other-IPOD-tools-Updates/iTunes.shtml',
  fixedPath: '%CommonProgramFiles%\\Apple\\Apple Application Support\\AppleVersions.dll',
  version: {
    selector: '.dllabel+span'
  },
  download: {
    plain: 'https://www.apple.com/itunes/download/win64',
    output: '.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, async (from, to) => {
      const path = require('path')

      let temp = path.resolve(fns.dirname, 'unzip')
      let list = fns.walk(temp)
      let toInstall = ['AppleApplicationSupport.msi', 'AppleApplicationSupport64.msi', 'AppleMobileDeviceSupport64.msi']
      for (let i of list) {
        let name = path.basename(i)
        if (toInstall.includes(name)) {
          let installed = await fns.install.msi.i(i, iPath)
          if (!installed) return false
        }
      }
      return true
    })
  }
}
module.exports = data
