'use strict'

let data = {
  commercial: 3,
  site: {
    Softpedia: 'https://www.softpedia.com/get/Mobile-Phone-Tools/Droid-Transfer.shtml'
  },
  preferPath: 'Droid Transfer.exe',
  install: function (output, iPath, fns) {
    return fns.install.ai.msi(output, iPath, null, 'Droid Transfer.msi', data.preferPath)
  }
}
module.exports = data
