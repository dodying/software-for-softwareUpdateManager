'use strict'

let data = {
  url: 'http://www.advanced-ip-scanner.com/',
  version: ['.download_link', 'href'],
  download: '.download_link',
  preferPath: 'advanced_ip_scanner.exe',
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
