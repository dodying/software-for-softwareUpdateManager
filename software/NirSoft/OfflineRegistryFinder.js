'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/offline_registry_finder.html',
  version: {
    selector: '.utilcaption'
  },
  download: {
    plain: 'https://www.nirsoft.net/utils/offlineregistryfinder-x64.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
