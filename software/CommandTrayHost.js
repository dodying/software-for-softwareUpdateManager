'use strict'

let data = {
  url: 'https://github.com/rexdf/CommandTrayHost/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$=".zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath, 'x64\\\\CommandTrayHost.exe')
  }
}
module.exports = data
