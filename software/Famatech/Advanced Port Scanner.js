'use strict'

let data = {
  url: 'http://www.advanced-port-scanner.com/',
  version: ['.download-button', 'href'],
  download: '.download-button',
  preferPath: 'advanced_port_scanner.exe',
  install: info => {
    let path = require('path')
    let installed = info.fns.install.inno(info)
    if (installed) {
      let list = info.fns.walk(path.resolve(info.fns.dirname, 'unzip'))
      info.output = list.filter(i => path.extname(i) === '.msi')[0]
      return info.fns.install.msi(info, null, data.preferPath)
    } else {
      return false
    }
  }
}
module.exports = data
