'use strict'

let data = {
  url: 'https://www.slimjet.com/en/dlpage.php',
  version: {
    selector: 'h3'
  },
  download: {
    plain: 'https://www.slimjetbrowser.com/release/sjt7z_x64.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
