'use strict'

let data = {
  commercial: 2,
  site: {
    Softpedia: 'https://www.softpedia.com/get/Internet/Popup-Ad-Spyware-Blockers/Adguard.shtml'
  },
  preferPath: 'Adguard.exe',
  install: function (output, iPath, fns) {
    return fns.install.msi(output, iPath, null, 'setup.msi', data.preferPath)
  }
}
module.exports = data
