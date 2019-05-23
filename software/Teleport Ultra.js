'use strict'

let data = {
  commercial: 3,
  url: 'http://www.tenmax.com/teleport/version.htm',
  version: {
    selector: '.ver'
  },
  download: {
    plain: 'http://www.tenmax.com/Teleport_Ultra_Installer.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.nsis(output, iPath)
  },
  other: {
    pro: {
      download: {
        plain: 'http://www.tenmax.com/Teleport_Pro_Installer.exe'
      }
    }
  }
}
module.exports = data
