'use strict'

let data = {
  commercial: 3,
  url: 'https://data.services.jetbrains.com/products/releases?code=IIU&latest=true',
  version: {
    func: async (res, $) => res.json.IIU[0].version
  },
  download: {
    func: async (res, $) => res.json.IIU[0].downloads.windowsZip.link
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
