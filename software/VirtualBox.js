'use strict'

let data = {
  url: 'https://www.virtualbox.org/wiki/Downloads',
  version: {
    selector: 'h3'
  },
  download: {
    selector: 'h3+ul a[href$="Win.exe"]'
  },
  install: function (output, iPath, fns) {
    let killed = fns.kill(output, iPath)
    if (!killed) return false
    let path = require('path')
    require('child_process').execSync(`"${output}" --extract --path "${path.resolve(fns.dirname, 'unzip')}"`)
    return fns.install.msi.i(path.resolve(fns.dirname, fns.walk('unzip').filter(i => i.match('_amd64.msi'))[0]), iPath, ['VBOX_INSTALLSTARTMENUENTRIES=0', 'VBOX_INSTALLDESKTOPSHORTCUT=0', 'VBOX_INSTALLQUICKLAUNCHSHORTCUT=0', 'VBOX_REGISTERFILEEXTENSIONS=1', 'VBOX_START=0'])
  }
}
module.exports = data
