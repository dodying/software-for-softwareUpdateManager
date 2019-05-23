'use strict'

let data = {
  url: 'http://www.advanced-ip-scanner.com/',
  version: {
    selector: '.download_link',
    attr: 'href'
  },
  download: {
    selector: '.download_link'
  },
  preferPath: 'advanced_ip_scanner.exe',
  install: function (output, iPath, fns) {
    let path = require('path')
    let installed = fns.install.inno(output, iPath)
    if (installed) {
      let list = fns.walk(path.resolve(fns.dirname, 'unzip'))
      return fns.install.msi(list.filter(i => path.extname(i) === '.msi')[0], iPath, null, data.preferPath)
    } else {
      return false
    }
  }
}
module.exports = data
