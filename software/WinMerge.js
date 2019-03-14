'use strict'

let data = {
  withoutHeader: true,
  url: 'http://winmerge.org/downloads/',
  version: {
    selector: 'h3'
  },
  download: {
    selector: 'a[href$="x64-exe.zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
