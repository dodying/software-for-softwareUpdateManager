'use strict'

let data = {
  commercial: 3,
  url: 'https://www.ritlabs.com/en/products/thebat/download.php',
  version: {
    selector: '.download-table > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1)'
  },
  download: {
    selector: '[href^="/download/the_bat/thebat_64"][href$=".msi"]'
  },
  preferPath: 'thebat64.exe',
  install: function (output, iPath, fns) {
    return fns.install.msi(output, iPath, null, data.preferPath)
  }
}
module.exports = data
