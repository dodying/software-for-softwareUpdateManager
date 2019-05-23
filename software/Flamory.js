'use strict'

let data = {
  url: 'https://www.softpedia.com/get/Internet/Bookmark-Managers/Flamory.shtml',
  version: {
    func: async (res, $) => res.body.match(/spjs_prog_version="(.*?)";/)[1]
  },
  download: {
    plain: 'http://flamory.com/get'
  },
  install: function (output, iPath, fns) {
    return fns.install.ai(output, iPath, null, 'App')
  }
}
module.exports = data
