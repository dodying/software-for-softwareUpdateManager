'use strict'

let data = {
  url: 'https://www.hnsoft.pt/Downloads_cstatus',
  version: {
    selector: '[href$=".zip"]',
    attr: 'href'
  },
  download: {
    selector: '[href$=".zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
