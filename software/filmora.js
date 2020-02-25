'use strict'

let data = {
  url: 'https://www.shencut.com/download.html',
  version: async (res, $, fns, choice) => {
    let uri1 = $('.sys-win').eq(0).attr('href')
    let res1 = await fns.reqHEAD(uri1)
    return res1.request.uri.href.match(/filmora_full(.*?).exe/)
  },
  download: 'http://cc-download.wondershare.cc/cbs_down/filmora_full{version}.exe',
  install: 'install_inno'
}
module.exports = data
