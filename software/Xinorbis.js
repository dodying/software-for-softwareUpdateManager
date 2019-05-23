'use strict'

let data = {
  url: 'http://www.xinorbis.com/downloads.htm',
  version: {
    selector: '.content > p:nth-child(19)'
  },
  download: {
    plain: 'http://www.xinorbis.com/XinorbisPro64.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
