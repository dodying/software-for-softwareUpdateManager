'use strict'

let data = {
  commercial: 1,
  url: 'https://www.saleensoftware.com/ScanFs',
  version: ['.TdVersionBox1+td', 'text', /(.*)/],
  changelog: {
    selector: 'tr:contains("Change Log")+tr',
    attr: 'text',
    match: /^build [\d.]+/,
    split: true
  },
  download: async (res, $, fns, choice) => {
    let res1 = await fns.reqHEAD('http://download.saleensoftware.com/ScanFs_setup_exe')
    return res1.request.uri.href
  }
}
module.exports = data
