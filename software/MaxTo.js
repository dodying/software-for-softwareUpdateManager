'use strict'

let data = {
  url: 'https://maxto.net/',
  version: {
    selector: 'small'
  },
  download: {
    func: async (res, $, fns, choice) => {
      let uri1 = $('.btn-primary').eq(0).attr('href')
      let res1 = await fns.reqHEAD(uri1)
      return res1.request.uri.href
    }
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install', 'full.nupkg', null, 'lib\\net45')
  }
}
module.exports = data
