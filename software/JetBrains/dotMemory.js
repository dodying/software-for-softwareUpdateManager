'use strict'

let data = {
  commercial: 3,
  url: 'https://data.services.jetbrains.com/products/releases?code=DM&latest=true',
  version: {
    func: async (res, $) => res.json.DM[0].version
  },
  download: {
    func: async (res, $) => res.json.DM[0].downloads.windows64.link
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
