'use strict'

let data = {
  url: 'https://neosmart.net/Software/Changelog/6',
  preferPath: 'TweakUI64.exe',
  version: {
    selector: 'a[name]'
  },
  download: {
    func: async (res, $, fns) => fns.download.neosmart(res, $, fns)
  },
  install: function (output, iPath, fns) {
    return fns.install.msi.single(output, iPath, data.preferPath)
  }
}
module.exports = data
