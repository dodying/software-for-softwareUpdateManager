'use strict'

let data = {
  url: 'https://nodejs.org/en/download/current/',
  version: {
    selector: '.color-lightgray>strong'
  },
  download: {
    selector: '.download-matrix a[href$="x64.zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  },
  other: {
    LTS: {
      url: 'https://nodejs.org/en/download/'
    }
  }
}
module.exports = data
