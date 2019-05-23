'use strict'

let data = {
  url: 'http://www.itsamples.com/qr-coder-ie.html',
  version: {
    func: async (res, $) => res.body.match(/version: (\d+[\d.]+\d+)/i)[1]
  },
  download: {
    plain: 'http://www.itsamples.com/downloads/qr-coder-ie.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install_inno_cli', '.exe')
  }
}
module.exports = data
