'use strict'

let data = {
  url: 'https://www.kaplansoft.com/download.html',
  preferPath: 'SIPob.exe',
  version: {
    selector: '.pricerow:contains("SIPob")>td[align="center"]'
  },
  download: {
    plain: 'https://www.kaplansoft.com/sipob/release/SIPob.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install_msi_single', '.msi', data.preferPath)
  }
}
module.exports = data
