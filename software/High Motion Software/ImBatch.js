'use strict'

let data = {
  url: 'https://www.highmotionsoftware.com/download-center',
  version: {
    selector: '.field-item h3>a[href$="imbatch"]'
  },
  download: {
    plain: 'https://www.highmotionsoftware.com/download/ImBatch/file/setup-imbatch-latest.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
