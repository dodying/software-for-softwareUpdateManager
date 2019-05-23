'use strict'

let data = {
  url: 'http://www.alexnolan.net/software/drivemanager.xml',
  version: {
    selector: 'Program_Version'
  },
  download: {
    plain: 'http://www.alexnolan.net/software/DriveMan.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
