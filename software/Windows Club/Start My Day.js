'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/System/Launchers-Shutdown-Tools/Start-My-Day.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
