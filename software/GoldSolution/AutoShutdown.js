'use strict'

let data = {
  url: 'https://www.softpedia.com/get/System/Launchers-Shutdown-Tools/PC-Auto-Shutdown.shtml',
  version: {
    func: async (res, $) => res.body.match(/spjs_prog_version="(.*?)";/)[1]
  },
  download: {
    plain: 'http://www.drivermagician.com/AutoShutdown.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
