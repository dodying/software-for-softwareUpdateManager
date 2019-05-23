'use strict'

let data = {
  commercial: 3,
  url: 'https://data.services.jetbrains.com/products/releases?code=MPS&latest=true',
  version: {
    func: async (res, $) => res.json.MPS[0].version
  },
  download: {
    func: async (res, $) => res.json.MPS[0].downloads.zip.link
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
