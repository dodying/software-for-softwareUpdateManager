'use strict'

let data = {
  url: 'https://github.com/yupi2/synergy/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /(.*)_master/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$=".msi"][href*="_x64_"]'
  },
  preferPath: 'synergys.exe',
  install: function (output, iPath, fns) {
    return fns.install.msi(output, iPath, null, data.preferPath)
  }
}
module.exports = data
