'use strict'

let data = {
  commercial: 3,
  url: 'http://www.vso-software.fr/products/convert_x_to_dvd/',
  version: {
    selector: '#button_download+div>div'
  },
  download: {
    plain: 'http://www.vso-software.fr/download_product_direct.php?product=convertxtodvd'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
