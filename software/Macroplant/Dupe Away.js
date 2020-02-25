'use strict'

let data = {
  commercial: 3,
  url: 'https://macroplant.com/dupeaway',
  version: ['.btn-primary[ga*="Download Dupe Away (PC)"]', 'ga', /Version ([\d.]+)/],
  download: async (res, $, fns, choice) => {
    let uri1 = $('.btn-primary[ga*="Download Dupe Away (PC)"]').eq(0).attr('href')
    let res1 = await fns.reqHEAD(uri1)
    return res1.request.uri.href
  },
  install: 'install_inno'
}
module.exports = data
