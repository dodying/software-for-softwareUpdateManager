'use strict'

let data = {
  url: 'http://ce.ys168.com/f_ht/ajcx/wj.aspx?cz=dq&mlbh=1252237&_dlmc=ygocore',
  version: ['.zml:contains("完整版") [href*="yunpan.360.cn"]', 'text', /^\[(.*?)\]/],
  download: async (res, $, fns, choice) => {
    let uri1 = $('.zml:contains("完整版") [href*="yunpan.360.cn"]').eq(0).attr('href')
    let res1 = await fns.req(uri1)

    let shorturl = uri1.match(/\.cn\/(.*)/)[1]
    let nid = res1.body.match(/"nid": "(.*?)"/)[1]
    let token = res1.body.match(/download_permit_token: '(.*?)'/)[1]

    // shorturl=surl_yFa69sgEkiQ&nid=15559410772400573&download_permit_token=9cf0c12f5fdf8ab6868a48e207d6302f
    console.debug(`shorturl=${shorturl}&nid=${nid}&download_permit_token=${token}`)
    let res2 = await fns.req({
      uri: new URL(res1.request.uri.href).origin + '/share/downloadfile',
      method: 'POST',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36',
        Referer: res1.request.uri.href,
        'X-Requested-With': 'XMLHttpRequest'
      },
      form: {
        shorturl: shorturl,
        nid: nid,
        download_permit_token: token
      },
      json: true
    })
    return res2.body.data.downloadurl
  },
  install: 'install'
}
module.exports = data
