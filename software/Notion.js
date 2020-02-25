'use strict'

let url

let data = {
  commercial: 2,
  url: 'https://www.notion.so/desktop',
  version: async (res, $, fns) => {
    let res1 = await fns.req({
      method: 'POST',
      uri: 'https://www.notion.so/api/v3/getDesktopDownloadUrl',
      form: {
        platform: 'windows'
      }
    })
    url = res1.json.url
    return url.match(/%20(\d+[\d.]+\d+).exe/)[1]
  },
  download: (res, $) => url,
  install: ['install_zipped', 'install', 'app-64.7z']
}
module.exports = data
