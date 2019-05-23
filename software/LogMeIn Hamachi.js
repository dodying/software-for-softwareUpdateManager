'use strict'

let data = {
  url: 'https://www.softpedia.com/get/Internet/File-Sharing/Hamachi.shtml',
  version: {
    func: async (res, $) => res.body.match(/spjs_prog_version="(.*?)";/)[1]
  },
  download: {
    plain: 'https://secure.logmein.com/hamachi.msi'
  },
  preferPath: 'hamachi-2-ui.exe',
  install: function (output, iPath, fns) {
    return fns.install.msi(output, iPath, null, data.preferPath)
  }
}
module.exports = data
