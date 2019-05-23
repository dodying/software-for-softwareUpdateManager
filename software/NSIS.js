'use strict'

let data = {
  url: 'https://nsis.sourceforge.io/Download',
  version: {
    selector: '[style="font-size:160%"]'
  },
  download: {
    selector: 'a[href$=".exe?download"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
