'use strict'

let data = {
  commercial: 2,
  url: 'https://www.listary.com/download',
  version: {
    selector: '.portable-download-link',
    attr: 'href'
  },
  download: {
    selector: '.portable-download-link'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
