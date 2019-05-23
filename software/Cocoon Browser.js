'use strict'

let data = {
  commercial: 2,
  url: 'https://www.softpedia.com/get/Internet/Browsers/Cocoon-Browser.shtml',
  version: {
    func: async (res, $) => res.body.match(/spjs_prog_version="(.*?)";/)[1]
  },
  download: {
    plain: 'https://getcocoon.com/downloads/vwc_cocoon.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath, null, 'core')
  }
}
module.exports = data
