'use strict'

let downloadUrl

let data = {
  url: 'https://www.wandoujia.com/',
  version: async (res, $, fns, choice) => {
    let uri1 = $('[data-track="home/download/exe"]').eq(0).attr('href')
    let res1 = await fns.reqHEAD(uri1)
    downloadUrl = res1.request.uri.href
    return downloadUrl.match(/wandoujia_([\d.]+)_25pp/)[1]
  },
  download: () => downloadUrl,
  install: 'install_nsis'
}
module.exports = data
