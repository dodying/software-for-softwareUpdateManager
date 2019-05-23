'use strict'

let data = {
  url: 'https://pro.25pp.com/ppad_zj/',
  version: {
    func: async (res, $, fns, choice) => {
      let uri1 = $('.btn-down').eq(0).attr('href')
      let res1 = await fns.reqHEAD(uri1)
      return res1.request.uri.href.match(/pphelper_offline_(.*?)_25pp/)[1]
    }
  },
  download: {
    selector: '.btn-down'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
