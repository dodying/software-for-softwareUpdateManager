'use strict';

const data = {
  url: 'http://ce.ys168.com/f_ht/ajcx/wj.aspx?cz=dq&mlbh=1252237&_dlmc=ygocore',
  version: ['.zml:contains("完整版") [href*="yunpan.360.cn"]', 'text', /^\[(.*?)\]/],
  download: async (res, $, fns, choice) => {
    const uri1 = $('.zml:contains("完整版") [href*="yunpan.360.cn"]').eq(0).attr('href');
    const res1 = await fns.req(uri1);

    const shorturl = uri1.match(/\.cn\/(.*)/)[1];
    const nid = res1.body.match(/"nid": "(.*?)"/)[1];
    const token = res1.body.match(/download_permit_token: '(.*?)'/)[1];

    // shorturl=surl_yFa69sgEkiQ&nid=15559410772400573&download_permit_token=9cf0c12f5fdf8ab6868a48e207d6302f
    console.debug(`shorturl=${shorturl}&nid=${nid}&download_permit_token=${token}`);
    const res2 = await fns.req({
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
      }
    });
    return res2.json.data.downloadurl;
  },
  install: 'install'
};
module.exports = data;
