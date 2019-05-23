'use strict'

let data = {
  commercial: 3,
  url: 'http://www.vso-software.fr/products/bluray-converter/bluray-converter.php',
  version: {
    selector: '.box-side td:contains("Version")'
  },
  download: {
    plain: 'http://www.vso-software.fr/download_product_direct.php?product=blurayconverterultimate'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
