'use strict'

let data = {
  commercial: 3,
  url: 'http://www.vso-software.fr/products/video-converter/convert-x-to-video.php',
  version: {
    selector: '#button_download+div>div'
  },
  download: {
    plain: 'http://www.vso-software.fr/download_product_direct.php?product=convertxtovideo'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
