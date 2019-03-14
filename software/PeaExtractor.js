'use strict'

let data = {
  withoutHeader: true,
  url: 'http://www.peazip.org/peaextractor-unace-unrar-unzip.html',
  version: {
    selector: 'a[name="download_rar_extractor"]+a'
  },
  download: {
    selector: 'a[href$="WIN64.zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
