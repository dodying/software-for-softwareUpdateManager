'use strict'

let data = {
  url: 'https://data.services.jetbrains.com/products/releases?code=PCC&latest=true',
  version: {
    func: async (res, $) => res.json.PCC[0].version
  },
  download: {
    func: async (res, $) => res.json.PCC[0].downloads.windows.link
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
