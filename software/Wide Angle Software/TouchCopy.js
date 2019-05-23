'use strict'

let data = {
  commercial: 3,
  site: {
    Softpedia: 'https://www.softpedia.com/get/IPOD-TOOLS/Multimedia-IPOD-tools/TouchCopy.shtml'
  },
  preferPath: 'TouchCopy16.exe',
  install: function (output, iPath, fns) {
    return fns.install.ai.msi(output, iPath, null, 'TouchCopy16x86.msi', data.preferPath)
  }
}
module.exports = data
