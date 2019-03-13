'use strict'

let data = {
  url: 'https://gillmeister-software.com/products/batch-text-replacer/download.aspx',
  version: {
    selector: '.version'
  },
  download: {
    plain: 'https://gillmeister-software.com/downloads/btr-setup.exe'
  },
  install: function (output, iPath) {
    return require('./../../js/install_inno')(output, iPath)
  }
}
module.exports = data
