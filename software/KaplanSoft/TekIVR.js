'use strict'

let data = {
  url: 'https://www.kaplansoft.com/download.html',
  preferPath: 'TekIVR.exe',
  version: {
    selector: '.pricerow:contains("TekIVR")>td[align="center"]'
  },
  download: {
    plain: 'https://www.kaplansoft.com/tekivr/release/TekIVR.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install_msi', '.msi', null, data.preferPath)
  }
}
module.exports = data
