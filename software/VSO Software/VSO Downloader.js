'use strict'

let data = {
  commercial: 3,
  url: 'http://www.vso-software.fr/products/downloader/vso-downloader.php',
  version: {
    selector: '#button_download+div>div'
  },
  download: {
    plain: 'http://www.vso-software.fr/download_product_direct.php?product=downloader'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
