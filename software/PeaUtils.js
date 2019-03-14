'use strict'

let data = {
  withoutHeader: true,
  url: 'http://www.peazip.org/peautils-hash-secure-delete.html',
  version: {
    selector: 'a[name="download_hash_utility"]+a'
  },
  download: {
    selector: 'a[href$="WIN64.zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
