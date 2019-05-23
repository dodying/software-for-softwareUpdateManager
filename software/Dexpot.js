'use strict'

let data = {
  url: 'https://www.dexpot.de/?id=download',
  version: {
    selector: '.ueberschrift+li',
    match: /(.*)/
  },
  download: {
    selector: 'a[href$=".zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
