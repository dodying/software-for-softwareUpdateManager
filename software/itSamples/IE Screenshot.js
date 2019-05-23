'use strict'

let data = {
  url: 'http://www.itsamples.com/ie-screenshot.html',
  version: {
    func: async (res, $) => res.body.match(/version: (\d+[\d.]+\d+)/i)[1]
  },
  download: {
    plain: 'http://www.itsamples.com/downloads/ie-screenshot-setup-x86.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install_inno_cli')
  }
}
module.exports = data
