'use strict'

let data = {
  url: 'https://neosmart.net/Software/Changelog/28',
  version: {
    selector: 'a[name]'
  },
  download: {
    func: async (res, $, req, cheerio) => require('./../../js/download/neosmart')(res, $, req, cheerio)
  },
  install: function (output, iPath) {
    return require('./../../js/install_single')(output, iPath)
  }
}
module.exports = data
