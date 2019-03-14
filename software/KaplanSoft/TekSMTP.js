'use strict'

let data = {
  url: 'https://www.kaplansoft.com/download.html',
  preferPath: 'TekSMTP.exe',
  version: {
    selector: '.pricerow:contains("TekSMTP")>td[align="center"]'
  },
  download: {
    plain: 'https://www.kaplansoft.com/teksmtp/release/TekSMTP.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install_msi', '.msi', null, data.preferPath)
  }
}
module.exports = data
