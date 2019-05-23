'use strict'

let data = {
  url: 'https://github.com/hanyizhao/NetSpeedMonitor/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$=".msi"]'
  },
  preferPath: 'NetSpeedMonitor.exe',
  install: function (output, iPath, fns) {
    return fns.install.msi(output, iPath, null, data.preferPath)
  }
}
module.exports = data
