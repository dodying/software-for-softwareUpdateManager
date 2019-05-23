'use strict'

let data = {
  url: 'https://www.softpedia.com/get/File-managers/One-Commander.shtml',
  version: {
    func: async (res, $) => res.body.match(/spjs_prog_version="(.*?)";/)[1]
  },
  download: {
    plain: 'http://onecommander.com/OneCommanderPortable.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
