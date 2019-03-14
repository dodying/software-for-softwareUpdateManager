'use strict'

let data = {
  url: 'https://github.com/LionelJouin/PiP-Tool/releases/latest',
  preferPath: 'PiP-Tool.exe',
  version: {
    selector: '.muted-link.css-truncate',
    match: /(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$=".msi"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.msi(output, iPath, null, data.preferPath)
  }
}
module.exports = data
