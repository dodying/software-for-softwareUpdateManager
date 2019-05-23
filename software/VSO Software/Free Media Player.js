'use strict'

let data = {
  commercial: 3,
  url: 'http://www.vso-software.fr/products/vmp/vso-media-player.php',
  version: {
    selector: '.box-side td:contains("Version")'
  },
  download: {
    plain: 'http://www.vso-software.fr/download_product_direct.php?product=vmp'
  }
}
module.exports = data
