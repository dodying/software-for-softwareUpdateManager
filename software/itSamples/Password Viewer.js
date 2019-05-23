'use strict'

let data = {
  url: 'http://www.itsamples.com/password-viewer.html',
  version: {
    func: async (res, $) => res.body.match(/version: (\d+[\d.]+\d+)/i)[1]
  },
  download: {
    plain: 'http://www.itsamples.com/downloads/password-viewer.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
