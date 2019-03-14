'use strict'

let data = {
  url: 'https://rime.im/download/',
  version: {
    selector: 'a[href="https://bintray.com/rime/weasel/release"]'
  },
  download: {
    selector: 'a[href="https://bintray.com/rime/weasel/release"]+a'
  },
  beforeInstall: function (output, iPath, fns) {
    let path = require('path')
    let parentPath = path.parse(iPath).dir
    let setup = path.resolve(parentPath, 'WeaselSetup.exe')
    if (require('fs').existsSync(setup)) require('child_process').execSync(`"${setup}" /u`)
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  },
  afterInstall: function (output, iPath, fns) {
    let path = require('path')
    let parentPath = path.parse(iPath).dir
    let setup = path.resolve(parentPath, 'WeaselSetup.exe')
    require('child_process').execSync(`"${setup}" /i`)
  }
}
module.exports = data
