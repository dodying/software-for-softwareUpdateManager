'use strict'

let data = {
  url: 'https://www.softpedia.com/get/Others/Fun/Uplay.shtml',
  version: {
    func: async (res, $) => res.body.match(/spjs_prog_version="(.*?)";/)[1]
  },
  download: {
    plain: 'https://ubistatic3-a.akamaihd.net/orbit/launcher_installer/UplayInstaller.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
