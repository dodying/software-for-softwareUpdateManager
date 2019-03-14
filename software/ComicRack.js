'use strict'

let data = {
  url: 'http://comicrack.cyolito.com/downloads',
  version: {
    selector: 'strong:contains("ComicRack for Windows")'
  },
  download: {
    selector: '.btn-lg'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
