'use strict'

let data = {
  url: 'https://www.softpedia.com/get/Others/Fun/Valve-Steam.shtml',
  version: {
    func: async (res, $) => res.body.match(/spjs_prog_version="(.*?)";/)[1]
  },
  download: {
    plain: 'https://media.st.dl.bscstorage.net/client/installer/SteamSetup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
