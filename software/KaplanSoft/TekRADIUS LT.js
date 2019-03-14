'use strict'

let data = {
  url: 'https://www.kaplansoft.com/download.html',
  preferPath: 'TekRADIUSLT.exe',
  version: {
    selector: '.pricerow:contains("TekRADIUS LT")>td[align="center"]'
  },
  download: {
    plain: 'https://www.kaplansoft.com/tekradius/release/TekRADIUSLT.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install_msi', '.msi', null, data.preferPath)
  }
}
module.exports = data
