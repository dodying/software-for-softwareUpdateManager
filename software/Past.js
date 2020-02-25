'use strict'

let data = {
  url: 'https://folk.uio.no/ohammer/past/',
  version: 'font>b',
  changelog: async (res, $, fns, choice) => {
    let res1 = await fns.req('https://folk.uio.no/ohammer/past/versionlist.html')
    let $1 = fns.cheerio.load(res1.body)
    return [$1.html($1('font>ul').eq(-1)), true]
  },
  download: 'p>a[href$=".zip"]',
  install: 'install_zipped_single'
}
module.exports = data
