'use strict'

let data = {
  url: 'https://www.softpedia.com/get/Internet/Browsers/Comodo-IceDragon.shtml',
  version: {
    func: async (res, $) => res.body.match(/spjs_prog_version="(.*?)";/)[1]
  },
  download: {
    plain: 'https://download.comodo.com/icedragon/update/x64/icedragonsetup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
