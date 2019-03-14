'use strict'

let data = {
  url: 'https://www.kaplansoft.com/download.html',
  preferPath: 'WKManager.exe',
  version: {
    selector: '.pricerow:contains("WebKilit")>td[align="center"]'
  },
  download: {
    plain: 'https://www.kaplansoft.com/webkilit/release/WebKilit.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install_msi', '.msi', null, data.preferPath)
  }
}
module.exports = data
