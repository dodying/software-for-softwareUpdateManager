'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/System/Back-Up-and-Recovery/Paragon-Drive-Backup-Express.shtml'
  },
  preferPath: 'program/advlauncher.exe',
  install: function (output, iPath, fns) {
    return fns.install.wix(output, iPath, null, /^BR\d+\.msi/, data.preferPath)
  }
}
module.exports = data
