'use strict'

let data = {
  url: 'https://neosmart.net/Software/Changelog/16',
  version: {
    selector: 'a[name]'
  },
  download: {
    func: async (res, $, req, cheerio) => require('./../../js/download/neosmart')(res, $, req, cheerio)
  },
  install: function (output, iPath) {
    return require('./../../js/install_zipped_single')(output, iPath, 'x64\\ln.exe')
  }
}
module.exports = data
