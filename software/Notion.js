'use strict'

let url

let data = {
  commercial: 2,
  url: 'https://www.notion.so/desktop',
  version: {
    func: async (res, $, fns) => {
      let res1 = await fns.req('https://www.notion.so/api/v3/getDesktopDownloadUrl', {
        method: 'POST',
        json: { 'platform': 'windows' }
      })
      url = res1.body.url
      return url.match(/%20(\d+[\d.]+\d+).exe/)[1]
    }
  },
  download: {
    func: async (res, $) => url
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install', 'app-64.7z')
  }
}
module.exports = data
