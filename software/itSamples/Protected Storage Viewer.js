'use strict'

let data = {
  url: 'http://www.itsamples.com/protected-storage-viewer.html',
  version: {
    func: async (res, $) => res.body.match(/version: (\d+[\d.]+\d+)/i)[1]
  },
  download: {
    plain: 'http://www.itsamples.com/downloads/protected-storage-viewer.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
