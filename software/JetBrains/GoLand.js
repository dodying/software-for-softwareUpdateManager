'use strict'

let data = {
  commercial: 3,
  url: 'https://data.services.jetbrains.com/products/releases?code=GO&latest=true',
  version: {
    func: async (res, $) => res.json.GO[0].version
  },
  download: {
    func: async (res, $) => res.json.GO[0].downloads.windows.link
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
