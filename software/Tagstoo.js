'use strict'

let data = {
  withoutHeader: true,
  url: 'https://tagstoo.sourceforge.io/download.html',
  version: {
    selector: '#downloadmain'
  },
  download: {
    selector: '#downloadmain>a'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install', 'app-64.7z')
  }
}
module.exports = data
