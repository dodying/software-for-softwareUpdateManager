'use strict'

let data = {
  url: 'https://biblprog.com/en/google_drive/download/',
  preferPath: 'googledrivesync.exe',
  version: {
    selector: '[itemprop="softwareVersion"]'
  },
  download: {
    plain: 'http://dl.google.com/drive/{version}/gsync.msi'
  },
  install: function (output, iPath, fns) {
    return fns.install.msi(output, iPath, null, data.preferPath)
  }
}
module.exports = data
