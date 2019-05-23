'use strict'

let data = {
  url: 'http://www.iphotodraw.com/',
  version: {
    selector: '.textBrightBold'
  },
  download: {
    plain: 'http://www.iphotodraw.com/download/iPhotoDraw.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
