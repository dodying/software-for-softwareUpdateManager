'use strict'

let data = {
  url: 'https://www.highmotionsoftware.com/download-center',
  version: {
    selector: '.field-item h3>a[href$="bonaview"]'
  },
  download: {
    plain: 'https://www.highmotionsoftware.com/download/BonAView/file/setup-bonaview-latest.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
