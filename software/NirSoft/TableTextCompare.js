'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/csv_file_comparison.html',
  version: {
    selector: '.utilcaption'
  },
  download: {
    plain: 'https://www.nirsoft.net/utils/tabletextcompare.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
