'use strict'

let data = {
  url: 'https://www.softpedia.com/get/Internet/Browsers/Comodo-Dragon.shtml',
  version: {
    func: async (res, $) => res.body.match(/spjs_prog_version="(.*?)";/)[1]
  },
  download: {
    plain: 'https://download.comodo.com/browser/release/dragon/x64/dragonsetup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
