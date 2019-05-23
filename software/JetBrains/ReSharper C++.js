'use strict'

let data = {
  commercial: 3,
  url: 'https://data.services.jetbrains.com/products/releases?code=RC&latest=true',
  version: {
    func: async (res, $) => res.json.RC[0].version
  },
  download: {
    func: async (res, $) => res.json.RC[0].downloads.windowsWeb.link
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
