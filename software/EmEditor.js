'use strict'

let data = {
  commercial: 3,
  url: 'https://www.emeditor.com/download/',
  version: {
    selector: 'a[href$="portable.zip"]',
    attr: 'href'
  },
  download: {
    selector: 'a[href$="portable.zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
