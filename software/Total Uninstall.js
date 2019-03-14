'use strict'

let data = {
  commercial: 3,
  url: 'https://www.martau.com/uninstaller-download.php',
  version: {
    selector: '.version'
  },
  download: {
    selector: 'a[href*="Setup"][href$=".exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath)
  }
}
module.exports = data
