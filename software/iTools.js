'use strict'

let downloadUrl

let data = {
  url: 'https://www.itools.cn/',
  version: async (res, $, fns, choice) => {
    let res1 = await fns.reqHEAD('https://update2.itools.cn/api/v1/redirect?p=itools4&c=pc_Thinksky')
    downloadUrl = res1.request.uri.href
    return downloadUrl.match(/itoolssetup_([\d.]+).exe/)[1]
  },
  download: () => downloadUrl,
  install: 'install',
  other: {
    3: {
      version: ['[data-type="itools3_download"]', 'href', /itoolssetup_([\d.]+).exe/],
      download: '[data-type="itools3_download"]'
    }
  }
}
module.exports = data
