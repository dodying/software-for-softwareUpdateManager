'use strict'

let data = {
  url: 'https://openhardwaremonitor.org/downloads/',
  version: {
    selector: '.download-button'
  },
  download: {
    selector: '.download-button'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
