'use strict'

let data = {
  commercial: 2,
  url: 'https://www.enpass.io/downloads/',
  version: {
    selector: '[href$=".exe"]',
    attr: 'href'
  },
  download: {
    selector: '[href$=".exe"]'
  },
  preferPath: 'Enpass.exe',
  install: function (output, iPath, fns) {
    return fns.install.wix(output, iPath, null, 'Enpass.msi')
  }
}
module.exports = data
