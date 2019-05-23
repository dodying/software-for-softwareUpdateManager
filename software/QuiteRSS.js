'use strict'

let data = {
  withoutHeader: true,
  url: 'https://quiterss.org/en/download',
  version: {
    selector: '.field-item a[href$=".zip"]'
  },
  download: {
    selector: '.field-item a[href$=".zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
