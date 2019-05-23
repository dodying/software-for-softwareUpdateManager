'use strict'

let data = {
  commercial: 2,
  url: 'https://bitsum.com/',
  version: {
    selector: 'a[href="/changes/processlasso/"]'
  },
  download: {
    plain: 'https://bitsum.com/files/processlassosetup64.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
