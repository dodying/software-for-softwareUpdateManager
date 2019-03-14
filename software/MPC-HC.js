'use strict'

let data = {
  url: 'https://mpc-hc.org/downloads/',
  version: {
    selector: '.downloads-version'
  },
  download: {
    selector: 'a[href$="x64.7z"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
