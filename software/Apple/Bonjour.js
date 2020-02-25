'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/IPOD-TOOLS/Other-IPOD-tools-Updates/iTunes.shtml'
  },
  download: 'https://www.apple.com/itunes/download/win64',
  fixedPath: '%ProgramFiles%\\Bonjour\\mdnsNSP.dll',
  install: info => {
    return info.fns.install.zipped(info, async (from, to) => {
      const path = require('path')

      let temp = path.resolve(info.fns.dirname, 'unzip')
      let list = info.fns.walk(temp)
      let toInstall = ['Bonjour64.msi']
      for (let i of list) {
        let name = path.basename(i)
        if (toInstall.includes(name)) {
          info.output = i
          let installed = await info.fns.install.msi.cli(info)
          if (!installed) return false
        }
      }
      return true
    })
  }
}
module.exports = data
