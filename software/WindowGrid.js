'use strict'

let data = {
  url: 'http://windowgrid.net/',
  version: {
    selector: '#downloads>a'
  },
  download: {
    selector: '#downloads>a'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
