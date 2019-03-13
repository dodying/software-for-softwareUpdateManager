'use strict'

let data = {
  url: 'https://neosmart.net/Software/Changelog/6',
  preferPath: 'TweakUI64.exe',
  version: {
    selector: 'a[name]'
  },
  download: {
    func: async (res, $, req, cheerio) => require('./../../js/download/neosmart')(res, $, req, cheerio)
  },
  install: function (output, iPath) {
    return require('./../../js/install_msi_single')(output, iPath, data.preferPath)
  }
}
module.exports = data
