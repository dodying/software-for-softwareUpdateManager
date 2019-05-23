'use strict'

let data = {
  commercial: 2,
  url: 'https://www.remoteutilities.com/download/',
  version: {
    selector: '.text-center>small'
  },
  download: {
    selector: 'a[href$=".portable.zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
