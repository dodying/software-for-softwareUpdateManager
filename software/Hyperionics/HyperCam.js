'use strict'

let data = {
  commercial: 3,
  url: 'http://www.hyperionics.com/hc2/index.asp',
  version: {
    selector: 'a[href$=".exe"]'
  },
  download: {
    selector: 'a[href$=".exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
