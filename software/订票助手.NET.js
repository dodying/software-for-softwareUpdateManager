'use strict'

let data = {
  url: 'https://www.fishlee.net/soft/12306/',
  version: {
    selector: '.lineinfo.info'
  },
  download: {
    selector: '.downloadButton'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
