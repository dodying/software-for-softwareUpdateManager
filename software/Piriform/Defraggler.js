'use strict'

let data = {
  commercial: 1,
  url: 'https://www.ccleaner.com/defraggler/download',
  version: {
    selector: '.icon_edit+strong'
  },
  download: {
    func: async (res, $, fns) => {
      let res1 = await fns.req('https://www.ccleaner.com/defraggler/download/standard')
      let $1 = fns.cheerio.load(res1.body)
      return $1('#BigDownload a').attr('href')
    }
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
