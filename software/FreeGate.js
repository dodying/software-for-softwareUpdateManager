'use strict'

let data = {
  useProxy: true,
  url: 'https://www.softpedia.com/get/Network-Tools/Misc-Networking-Tools/Freegate.shtml',
  version: {
    selector: '.dllabel+span'
  },
  download: {
    func: async (res, $, req, cheerio) => require('./../js/download/softpedia')(res, $, req, cheerio)
  },
  install: function (output, iPath) {
    return require('./../js/install_single')(output, iPath)
  }
}
module.exports = data
