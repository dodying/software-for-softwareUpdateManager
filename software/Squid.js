'use strict'

let data = {
  url: 'http://squid.diladele.com/',
  version: {
    selector: 'a[href$=".msi"]',
    attr: 'href'
  },
  download: {
    selector: 'a[href$=".msi"]'
  },
  preferPath: 'bin/squid.exe',
  install: function (output, iPath, fns) {
    return fns.install.msi(output, iPath, null, data.preferPath)
  }
}
module.exports = data
