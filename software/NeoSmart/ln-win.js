'use strict'

let data = {
  url: 'https://neosmart.net/Software/Changelog/16',
  version: {
    selector: 'a[name]'
  },
  download: {
    func: async (res, $, fns) => fns.download.neosmart(res, $, fns)
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath, 'x64\\ln.exe')
  }
}
module.exports = data
