'use strict'

let data = {
  url: 'https://www.kaplansoft.com/download.html',
  preferPath: 'TekRADIUS.exe',
  version: {
    selector: '.pricerow:contains("TekRADIUS")>td[align="center"]'
  },
  download: {
    plain: 'https://www.kaplansoft.com/tekradius/release/TekRADIUS.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install_msi', '.msi', null, data.preferPath)
  }
}
module.exports = data
