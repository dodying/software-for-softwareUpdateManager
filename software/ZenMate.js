'use strict'

let data = {
  url: 'https://www.softpedia.com/get/Security/Security-Related/ZenMate.shtml',
  version: {
    func: async (res, $) => res.body.match(/spjs_prog_version="(.*?)";/)[1]
  },
  download: {
    plain: 'https://zenmate-windows-update.s3-eu-west-1.amazonaws.com/setup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install', 'full.nupkg', null, 'lib\\net45')
  }
}
module.exports = data
