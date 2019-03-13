'use strict'

let data = {
  url: 'https://www.softwareok.com/?Download=Find.Same.Images.OK',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'https://www.softwareok.com/Download/Find.Same.Images.OK_Portable_x64.zip'
  },
  install: function (output, iPath) {
    return require('./../../js/install_zipped_single')(output, iPath)
  }
}
module.exports = data
