'use strict'

let data = {
  url: 'https://github.com/cztomczak/phpdesktop',
  version: {
    selector: 'a[href*="/releases/"]:contains("Windows")'
  },
  download: {
    func: async (res, $, fns, choice) => {
      let uri = $('a[href*="/releases/"]:contains("Windows")').eq(0).attr('href')
      let res1 = await fns.req(uri)
      let $1 = fns.cheerio.load(res1.body)
      return $1('a[href*="/releases/download/"][href$="zip"]').eq(0).attr('href')
    }
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
