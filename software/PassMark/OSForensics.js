'use strict'

let data = {
  commercial: 3,
  url: 'https://www.osforensics.com/download.html',
  version: {
    selector: '.feature'
  },
  download: {
    plain: 'https://downloads.passmark.com/osforensics/downloads/osf.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
