'use strict'

let data = {
  url: 'https://www.kaplansoft.com/download.html',
  preferPath: 'TekConSer.exe',
  version: {
    selector: '.pricerow:contains("TekConSer")>td[align="center"]'
  },
  download: {
    plain: 'https://www.kaplansoft.com/tekconser/release/TekConSer.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install_msi', '.msi', null, data.preferPath)
  }
}
module.exports = data
