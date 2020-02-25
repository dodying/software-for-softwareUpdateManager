'use strict'

let data = {
  url: 'https://www.waterfox.net/releases/',
  version: '[href$=".exe"]',
  changelog: async (res, $, fns, choice) => {
    let version = $('[href$=".exe"]').eq(0).text().match(/[\d.]+/)[0]
    let uri1 = 'https://www.waterfox.net/blog/'
    let res1 = await fns.req(uri1)
    let $1 = fns.cheerio.load(res1.body)

    let uri2 = $1(`.blog-post>h3>a:contains("${version}")`).eq(0).attr('href')
    let res2 = await fns.req(uri2)
    let $2 = fns.cheerio.load(res2.body)
    return [$2('[id^="-whats-new"]~ul').eq(0).html(), true]
  },
  download: '[href$=".exe"]',
  install: ['install', null, 'core']
}
module.exports = data
