'use strict'

let data = {
  commercial: 2,
  url: 'https://www.ghisler.com/download.htm',
  version: {
    selector: 'h3'
  },
  download: {
    selector: 'a[href$="x64.exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install', 'INSTALL.CAB')
  }
}
module.exports = data
