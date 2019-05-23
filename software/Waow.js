'use strict'

let data = {
  url: 'https://dedg3.com/wao/',
  version: {
    selector: 'section:contains("Changelog")>strong'
  },
  download: {
    plain: 'https://dedg3.com/wao/Waow.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install')
  }
}
module.exports = data
