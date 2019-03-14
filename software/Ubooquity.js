'use strict'

let data = {
  url: 'http://vaemendis.net/ubooquity/static2/download',
  version: {
    selector: '#static-2 > p:nth-child(8)'
  },
  download: {
    selector: '#static-2 > p:nth-child(7) > a'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
