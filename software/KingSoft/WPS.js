'use strict'

let data = {
  url: 'http://pc.wps.cn/',
  preferPath: 'ksolaunch.exe',
  version: {
    selector: '.verson_txt'
  },
  download: {
    selector: '.banner_txt>a[href$=".exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, (output, iPath) => {
      const path = require('path')
      const fs = require('fs')

      let dir = path.resolve(fns.dirname, 'unzip/$_11_')

      let oem = path.resolve(dir, 'oem.ini')
      let content = fs.readFileSync(oem, 'utf-8')
      content = content.replace('[Setup]', `[Setup]\nINSTALLPATH=${path.dirname(iPath)}\\`).replace(/Silent=\d+/i, 'Silent=1').replace(/(Launch.*?)=\d+/i, '$1=0').replace(/SendInstallSource=\d+/, 'SendInstallSource=0').replace(/AutoRunWhenStart=\d+/, 'AutoRunWhenStart=0')
      fs.writeFileSync(oem, content)

      let exe = path.resolve(dir, '$EXEFILE')
      fs.renameSync(exe, exe + '.exe')
      return fns.install.cli(output, iPath, exe + '.exe', [], { wait: true })
    })
  }
}
module.exports = data
