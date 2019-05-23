'use strict'

let data = {
  url: 'https://www.advancedrenamer.com/download',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'https://www.advancedrenamer.com/down/?obj=12'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
