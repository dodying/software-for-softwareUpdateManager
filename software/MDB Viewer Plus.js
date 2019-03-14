'use strict'

let data = {
  url: 'http://www.alexnolan.net/software/mdbplus.xml',
  version: {
    selector: 'Program_Version'
  },
  download: {
    plain: 'http://www.alexnolan.net/software/MDBPlus.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.single(output, iPath)
  }
}
module.exports = data
