'use strict'

let data = {
  url: 'https://github.com/transmission/transmission/releases/latest',
  preferPath: 'transmission-qt.exe',
  version: {
    selector: '.muted-link.css-truncate',
    match: /(.*)/
  },
  download: {
    plain: 'https://github.com/transmission/transmission-releases/raw/master/transmission-{version}-x64.msi'
  },
  install: function (output, iPath, fns) {
    return fns.install.msi(output, iPath, null, data.preferPath)
  }
}
module.exports = data
