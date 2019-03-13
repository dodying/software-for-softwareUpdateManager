'use strict'

let data = {
  url: 'https://www.conyedit.com/download',
  version: {
    selector: 'h3+div>h4'
  },
  download: {
    selector: 'a[href$="win_x64_Setup.exe"]'
  },
  install: function (output, iPath) {
    return require('./../js/install_inno_single')(output, iPath)
  }
}
module.exports = data
