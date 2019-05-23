'use strict'

let data = {
  url: 'https://api.pzhacm.org/iivb/cu.json',
  version: {
    func: async (res, $) => res.json.Stable.x64.version
  },
  download: {
    func: async (res, $) => res.json.Stable.x64.url[0]
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install')
  }
}
module.exports = data
