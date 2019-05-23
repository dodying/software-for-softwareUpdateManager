'use strict'

let data = {
  url: 'http://www.itsamples.com/flash-pictures-switcher.html',
  version: {
    func: async (res, $) => res.body.match(/version: (\d+[\d.]+\d+)/i)[1]
  },
  download: {
    plain: 'http://www.itsamples.com/downloads/flash-pictures-switcher.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install_inno_cli')
  }
}
module.exports = data
