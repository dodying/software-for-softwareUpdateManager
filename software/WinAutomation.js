'use strict'

let data = {
  commercial: 3,
  site: {
    Softpedia: 'https://www.softpedia.com/get/System/Launchers-Shutdown-Tools/WinAutomation.shtml'
  },
  preferPath: 'WinAutomation.Server.exe',
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install_msi', 'data\\\\WinAutomationSetup.msi', null, data.preferPath)
  }
}
module.exports = data
