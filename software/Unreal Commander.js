'use strict'

let data = {
  commercial: 2,
  url: 'https://x-diesel.com/?download',
  version: {
    selector: '#style1'
  },
  download: {
    selector: 'a[href$=".exe?64"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
