'use strict'

let data = {
  url: 'https://drp.su/api/miscs/products',
  version: {
    func: async (res, $) => res.json.data.value.network.version
  },
  download: {
    func: async (res, $) => res.json.data.value.network.links[0].downloadLink
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
