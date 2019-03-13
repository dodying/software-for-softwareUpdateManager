'use strict'

let data = {
  url: 'https://neosmart.net/Software/Changelog/10',
  version: {
    selector: 'a[name]'
  },
  download: {
    func: async (res, $, req, cheerio) => require('./../../js/download/neosmart')(res, $, req, cheerio)
  },
  install: function (output, iPath) {
    return require('./../../js/install_zipped')(output, iPath,'install_single','.exe')
  }
}
module.exports = data
