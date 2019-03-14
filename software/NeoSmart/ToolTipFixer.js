'use strict'

let data = {
  url: 'https://neosmart.net/Software/Changelog/10',
  version: {
    selector: 'a[name]'
  },
  download: {
    func: async (res, $, fns) => fns.download.neosmart(res, $, fns)
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install_single', '.exe')
  }
}
module.exports = data
