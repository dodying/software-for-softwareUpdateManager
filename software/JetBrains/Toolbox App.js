'use strict'

let data = {
  url: 'https://data.services.jetbrains.com/products/releases?code=TBA&latest=true',
  version: {
    func: async (res, $) => res.json.TBA[0].version
  },
  download: {
    func: async (res, $) => res.json.TBA[0].downloads.windows.link
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
