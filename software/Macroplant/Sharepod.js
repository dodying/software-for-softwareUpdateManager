'use strict'

let data = {
  commercial: 3,
  url: 'https://getsharepod.com/',
  version: ['.btn-primary[ga*="Download Sharepod (PC)"]', 'ga', /Version ([\d.]+)/],
  download: async (res, $, fns, choice) => {
    let uri1 = $('.btn-primary[ga*="Download Sharepod (PC)"]').eq(0).attr('href')
    let res1 = await fns.reqHEAD(uri1)
    return res1.request.uri.href
  },
  install: 'install_inno'
}
module.exports = data
