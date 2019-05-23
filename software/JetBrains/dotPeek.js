'use strict'

let data = {
  commercial: 3,
  url: 'https://data.services.jetbrains.com/products/releases?code=DPK&latest=true',
  version: {
    func: async (res, $) => res.json.DPK[0].version
  },
  download: {
    func: async (res, $) => res.json.DPK[0].downloads.windows64.link
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
