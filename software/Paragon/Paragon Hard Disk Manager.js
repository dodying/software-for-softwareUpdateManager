'use strict'

let data = {
  commercial: 3,
  site: {
    Softpedia: 'https://www.softpedia.com/get/System/Hard-Disk-Utils/Paragon-Hard-Disk-Manager.shtml'
  },
  preferPath: 'program/advlauncher.exe',
  install: function (output, iPath, fns) {
    return fns.install.wix(output, iPath, null, /^hdm/i, data.preferPath)
  }
}
module.exports = data
