'use strict'

let data = {
  url: 'https://powdertoy.co.uk/',
  version: {
    selector: '.version>h5'
  },
  download: {
    plain: 'https://powdertoy.co.uk/Download/powder-win32.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
