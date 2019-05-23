'use strict'

let data = {
  url: 'https://www.wireshark.org/download.html',
  version: {
    selector: '[data-parent="#accordion_download"]'
  },
  download: {
    selector: '#win64+a'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
