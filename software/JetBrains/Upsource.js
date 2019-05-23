'use strict'

let data = {
  commercial: 3,
  url: 'https://data.services.jetbrains.com/products/releases?code=US&latest=true',
  version: {
    func: async (res, $) => res.json.US[0].version
  },
  download: {
    func: async (res, $) => res.json.US[0].downloads.zip.link
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
