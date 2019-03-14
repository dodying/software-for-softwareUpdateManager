'use strict'

let data = {
  commercial: 2,
  url: 'https://www.ccleaner.com/ccleaner/download',
  version: {
    selector: '.icon_square:contains("Release notes")+div strong'
  },
  download: {
    func: async (res, $, fns) => {
      let res1 = await fns.req('https://www.ccleaner.com/ccleaner/download/standard')
      let $1 = fns.cheerio.load(res1.body)
      return $1('[data-download-url]').attr('data-download-url')
    }
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
