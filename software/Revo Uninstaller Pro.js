'use strict'

let data = {
  commercial: 3,
  url: 'https://www.softpedia.com/get/Tweak/Uninstallers/Revo-Uninstaller-Pro.shtml',
  version: {
    selector: '.dllabel+span'
  },
  download: {
    plain: 'https://www.revouninstaller.com/download-professional-version.php'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath)
  }
}
module.exports = data
