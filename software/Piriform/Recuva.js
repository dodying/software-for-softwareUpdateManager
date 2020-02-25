'use strict'

let data = {
  commercial: 2,
  url: 'https://www.ccleaner.com/recuva/download',
  version: '.icon_square:contains("Release notes")+div strong',
  changelog: '.icon_square:contains("Release notes")+div',
  download: async (res, $, fns) => {
    let res1 = await fns.req('https://www.ccleaner.com/recuva/download/standard')
    let $1 = fns.cheerio.load(res1.body)
    return $1('[data-download-url]').attr('data-download-url')
  },
  install: 'install_nsis'
}
module.exports = data
