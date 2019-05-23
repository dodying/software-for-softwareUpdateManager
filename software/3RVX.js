'use strict'

let data = {
  url: 'https://3rvx.com/',
  version: {
    selector: 'a[href$=".zip"]'
  },
  download: {
    selector: 'a[href$=".zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
