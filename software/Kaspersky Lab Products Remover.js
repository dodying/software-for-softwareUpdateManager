'use strict'

let data = {
  url: 'https://www.softpedia.com/get/Tweak/Uninstallers/Kaspersky-Anti-Virus-Remover.shtml',
  version: {
    func: async (res, $) => res.body.match(/spjs_prog_version="(.*?)";/)[1]
  },
  download: {
    plain: 'http://media.kaspersky.com/utilities/ConsumerUtilities/kavremvr.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.single(output, iPath)
  }
}
module.exports = data
