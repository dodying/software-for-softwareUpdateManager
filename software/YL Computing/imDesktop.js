'use strict'

let data = {
  commercial: 3,
  url: 'http://www.pcclean.io/imdesktop-download/',
  version: {
    selector: '.panel-widget-style-for-5641-0-1-0 > div:nth-child(1) > div:nth-child(2) > p:nth-child(3) > span:nth-child(1) > strong:nth-child(1)'
  },
  download: {
    plain: 'http://www.pcclean.io/product-imdesktop/imDesktop.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
