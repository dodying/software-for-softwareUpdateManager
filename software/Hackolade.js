'use strict'

let data = {
  commercial: 3,
  url: 'https://hackolade.com/download.html',
  version: {
    selector: 'h3'
  },
  download: {
    selector: 'a[href*="win64"]'
  },
  install: function (output, iPath) {
    return require('./../js/install_inno_with_type')(output, iPath)
  }
}
module.exports = data
