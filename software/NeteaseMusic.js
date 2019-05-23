'use strict'

let data = {
  url: 'https://music.163.com/download',
  version: {
    func: async (res, $, fns, choice) => {
      let res1 = await fns.reqHEAD('https://music.163.com/api/pc/download/latest')
      return res1.request.uri.pathname.match(/(\d+[\d.]+\d+)/)[1]
    }
  },
  download: {
    plain: 'https://music.163.com/api/pc/download/latest'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
