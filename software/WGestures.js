'use strict'

let data = {
  url: 'https://github.com/yingDev/WGestures/releases/latest',
  preferPath: 'WGestures.exe',
  version: {
    selector: '.muted-link.css-truncate',
    match: /(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$=".zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install_msi', null, null, data.preferPath)
  }
}
module.exports = data
