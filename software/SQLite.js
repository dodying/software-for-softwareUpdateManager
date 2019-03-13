'use strict'

let data = {
  url: 'https://sqlite.org/download.html',
  version: {
    selector: 'td:has(#a9)+td+td'
  },
  download: {
    func: async (res, $, req, cheerio) => res.body.match(/'a9','(.*?)'/)[1]
  },
  install: function (output, iPath) {
    return require('./../js/install_zipped_single')(output, iPath, 'sqlite3.exe')
  }
}
module.exports = data
