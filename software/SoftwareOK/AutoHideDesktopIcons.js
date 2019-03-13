'use strict'

let data = {
  url: 'https://www.softwareok.com/?Download=AutoHideDesktopIcons',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'https://www.softwareok.com/Download/AutoHideDesktopIcons_Portable.zip'
  },
  install: function (output, iPath) {
    return require('./../../js/install_zipped_single')(output, iPath)
  }
}
module.exports = data
