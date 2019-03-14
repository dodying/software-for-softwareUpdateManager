'use strict'

let data = {
  url: 'https://neosmart.net/Software/Changelog/29',
  version: {
    selector: 'a[name]'
  },
  download: {
    func: async (res, $, fns) => fns.download.neosmart(res, $, fns)
  },
  install: function (output, iPath, fns) {
    return fns.install.single(output, iPath)
  }
}
module.exports = data
