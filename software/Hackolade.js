'use strict'

let data = {
  commercial: 3,
  url: 'https://hackolade.com/download.html',
  version: {
    selector: 'h3'
  },
  download: {
    selector: 'a[href*="win64"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath)
  }
}
module.exports = data
