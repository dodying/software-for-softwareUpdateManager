'use strict'

let data = {
  url: 'https://data.services.jetbrains.com/products/releases?code=IIC&latest=true&type=release',
  version: {
    func: async (res, $) => JSON.parse(res.body).IIC[0].version
  },
  download: {
    func: async (res, $) => JSON.parse(res.body).IIC[0].downloads.windowsZip.link
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
