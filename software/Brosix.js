'use strict'

let data = {
  commercial: 3,
  url: 'https://www.softpedia.com/get/Internet/Chat/Instant-Messaging/Brosix.shtml',
  version: {
    func: async (res, $) => res.body.match(/spjs_prog_version="(.*?)";/)[1]
  },
  download: {
    plain: 'https://www.brosix.com/downloads/builds/official/Brosix.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
