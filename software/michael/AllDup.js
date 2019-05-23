'use strict'

let data = {
  url: 'http://www.alldup.de/download_alldup.php',
  version: {
    selector: 'a[href="/alldup_hilfe/alldup_version.php"]'
  },
  download: {
    plain: 'http://www.alldup.de/download/AllDupSetup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
