'use strict'

let data = {
  url: 'https://www.virtualbox.org/wiki/Downloads',
  version: 'h3',
  changelog: ['https://www.virtualbox.org/wiki/Changelog', '[id^="ChangelogforVirtualBox"]~ul'],
  download: 'h3+ul a[href$="Win.exe"]',
  install: info => {
    let killed = info.fns.kill(info.parentPath)
    if (!killed) return false
    let path = require('path')
    require('child_process').execSync(`"${info.output}" --extract --path "${path.resolve(info.fns.dirname, 'unzip')}"`)

    info.output = path.resolve(info.fns.dirname, info.fns.walk('unzip').filter(i => i.match('_amd64.msi'))[0])
    return info.fns.install.msi.cli(info, ['VBOX_INSTALLSTARTMENUENTRIES=0', 'VBOX_INSTALLDESKTOPSHORTCUT=0', 'VBOX_INSTALLQUICKLAUNCHSHORTCUT=0', 'VBOX_REGISTERFILEEXTENSIONS=1', 'VBOX_START=0'])
  }
}
module.exports = data
