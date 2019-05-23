'use strict'

let data = {
  url: 'https://riot-optimizer.com/',
  version: {
    selector: 'h1'
  },
  download: {
    func: async (res, $, fns, choice) => {
      let res1 = await fns.req('https://riot-optimizer.com/riot/thank-you-for-downloading-riot/')
      let $1 = fns.cheerio.load(res1.body)
      return $1('#direct-link').eq(0).attr('href')
    }
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
