'use strict'

let data = {
  url: 'https://www.softpedia.com/get/Security/Security-Related/Psiphon.shtml',
  version: {
    func: async (res, $) => res.body.match(/spjs_prog_version="(.*?)";/)[1]
  },
  download: {
    plain: 'https://psiphon.ca/psiphon3.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.single(output, iPath)
  }
}
module.exports = data
