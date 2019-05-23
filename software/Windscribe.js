'use strict'

let data = {
  url: 'https://www.softpedia.com/get/Security/Security-Related/Windscribe.shtml',
  version: {
    func: async (res, $) => res.body.match(/spjs_prog_version="(.*?)";/)[1]
  },
  download: {
    plain: 'https://assets.windscribe.com/desktop/win/Windscribe.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath)
  }
}
module.exports = data
