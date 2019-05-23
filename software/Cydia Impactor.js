'use strict'

let data = {
  url: 'https://cydia.saurik.com/',
  version: {
    func: async (res, $, fns, choice) => {
      let res1 = await fns.reqHEAD('https://cydia.saurik.com/api/latest/2')
      return res1.request.uri.href.match(/Impactor_(.*?).zip/)[1]
    }
  },
  download: {
    plain: 'https://cydia.saurik.com/api/latest/2'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
