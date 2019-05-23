'use strict'

let data = {
  url: 'https://sqlitestudio.pl/index.rvt?act=download',
  version: {
    selector: 'a[href$=".zip"][href*="SQLiteStudio"]'
  },
  download: {
    selector: 'a[href$=".zip"][href*="SQLiteStudio"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
