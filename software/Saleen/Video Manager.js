'use strict'

let data = {
  commercial: 1,
  url: 'https://www.saleensoftware.com/VideoManager',
  version: {
    selector: '.TdVersionBox1+td',
    match: /(.*)/
  },
  download: {
    func: async (res, $, fns, choice) => {
      let res1 = await fns.reqHEAD('http://download.saleensoftware.com/VideoManager_setup_exe')
      return res1.request.uri
    }
  }
}
module.exports = data