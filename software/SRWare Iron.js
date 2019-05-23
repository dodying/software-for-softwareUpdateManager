'use strict'

let data = {
  url: 'https://www.softpedia.com/get/Internet/Browsers/SRWare-Iron.shtml',
  version: {
    func: async (res, $) => res.body.match(/spjs_prog_version="(.*?)";/)[1]
  },
  download: {
    plain: 'https://www.srware.net/downloads/srware_iron64.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath)
  }
}
module.exports = data
