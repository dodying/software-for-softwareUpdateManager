'use strict'

let data = {
  url: 'http://z-o-o-m.eu/down.htm',
  version: {
    selector: '#content a'
  },
  download: {
    plain: 'http://z-o-o-m.eu/down/FileUploader.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.single(output, iPath)
  }
}
module.exports = data
