'use strict'

let data = {
  url: 'https://data.services.jetbrains.com/products/releases?code=IIC&latest=true',
  version: {
    func: async (res, $) => res.json.IIC[0].version
  },
  download: {
    func: async (res, $) => res.json.IIC[0].downloads.windowsZip.link
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
