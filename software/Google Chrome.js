'use strict'

let data = {
  url: 'https://api.pzhacm.org/iivb/cu.json',
  version: {
    func: async (res, $) => JSON.parse(res.body).Stable.x64.version
  },
  download: {
    func: async (res, $) => JSON.parse(res.body).Stable.x64.url[0]
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install')
  }
}
module.exports = data
