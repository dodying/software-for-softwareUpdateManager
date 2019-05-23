'use strict'

let data = {
  commercial: 3,
  url: 'https://data.services.jetbrains.com/products/releases?code=CL&latest=true',
  version: {
    func: async (res, $) => res.json.CL[0].version
  },
  download: {
    func: async (res, $) => res.json.CL[0].downloads.windowsZip.link
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
