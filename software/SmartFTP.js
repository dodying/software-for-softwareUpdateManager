'use strict'

let data = {
  commercial: 3,
  url: 'https://www.smartftp.com/en-us/download',
  version: {
    selector: '.download-button'
  },
  download: {
    plain: 'https://www.smartftp.com/get/SFTPMSI64.exe'
  },
  preferPath: 'SmartFTP.exe',
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install_msi', '.msi', null, data.preferPath)
  },
  other: {
    Library: {
      url: 'https://www.smartftp.com/en-us/ftplib/download',
      download: {
        plain: 'https://www.smartftp.com/get/SFTPFTPLib.exe'
      },
      install: function (output, iPath, fns) {
        return fns.install.nsis(output, iPath)
      }
    }
  }
}
module.exports = data
