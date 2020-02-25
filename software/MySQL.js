'use strict'

let data = {
  url: 'https://dev.mysql.com/downloads/mysql/?tpl=platform&os=3',
  version: '[class^="table"] tr>td:nth-child(2)',
  download: async (res, $, fns, choice) => {
    let uri1 = $('[href^="/downloads/file/?id="]').eq(0).attr('href')
    let res1 = await fns.req(uri1)
    let $1 = fns.cheerio.load(res1.body)
    return $1('[href^="/get/Downloads"]').eq(0).attr('href')
  },
  install: 'install'
}
module.exports = data
