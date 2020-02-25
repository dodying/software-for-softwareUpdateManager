'use strict'

let data = {
  url: 'https://fastcopy.jp/',
  version: '.table_head>th',
  changelog: ['https://fastcopy.jp/help/fastcopy.htm', '[name="history"]>.help_section tbody>tr:nth-child(2)'],
  download: async (res, $, fns) => {
    let url = $('.dl_link>a').attr('href')
    let res1 = await fns.req(url)
    let $1 = fns.cheerio.load(res1.body)
    return $1('.dl a').attr('href')
  },
  install: ['install_cli', null, ['/SILENT', '/DIR={dir}', '/EXTRACT64', '/NOSUBDIR']]
}
module.exports = data
