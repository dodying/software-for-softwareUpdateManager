'use strict'

let json

let data = {
  commercial: 2,
  url: 'https://www.hellofont.cn/download',
  version: async (res, $, fns, choice) => {
    let res1 = await fns.req({
      method: 'POST',
      uri: 'https://back2.hellofont.cn/ziyou/clientversionmanagement/clientversionmanagerhandler.ashx?opera=GetLatestClientVersionItem',
      headers: {
        'Referer': 'https://www.hellofont.cn/download',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36'
      },
      form: {
        json: '{"PlatformId":0}'
      }
    })
    json = res1.json
    return json.Version
  },
  changelog: async (res, $) => [].concat(json.News, json.Bugs).join('\n'),
  download: (res, $) => json.Url,
  install: 'install_zipped_single'
}
module.exports = data
