'use strict'

let data = {
  url: 'https://sqlite.org/download.html',
  version: {
    selector: 'td:has(#a9)+td+td'
  },
  download: {
    func: async (res, $) => res.body.match(/'a9','(.*?)'/)[1]
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath, 'sqlite3.exe')
  }
}
module.exports = data
