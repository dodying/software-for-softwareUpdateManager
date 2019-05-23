'use strict'

let data = {
  commercial: 1,
  url: 'https://www.saleensoftware.com/KeyboardExt',
  version: {
    selector: '.TdVersionBox1+td',
    match: /(.*)/
  },
  download: {
    func: async (res, $, fns, choice) => {
      let res1 = await fns.reqHEAD('http://download.saleensoftware.com/KeyboardExt_setup_zip')
      return res1.request.uri
    }
  }
}
module.exports = data
