'use strict'

let data = {
  url: 'https://windirstat.net/download.html',
  version: {
    selector: 'li.download'
  },
  download: {
    selector: 'a[href*="sourceforge.net"][href$=".exe"]'
  },
  install: function (output, iPath) {
    return require('./../js/install_zipped_single')(output, iPath, 'windirstat.exe')
  }
}
module.exports = data
