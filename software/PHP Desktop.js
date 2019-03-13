'use strict'

let data = {
  url: 'https://github.com/cztomczak/phpdesktop',
  version: {
    selector: 'a[href*="/releases/"]:contains("Windows")'
  },
  download: {
    func: async (res, $, req, cheerio, choice) => {
      let uri = $('a[href*="/releases/"]:contains("Windows")').eq(0).attr('href')
      let res1 = await req(uri)
      let $1 = cheerio.load(res1.body)
      return $1('a[href*="/releases/download/"][href$="zip"]').eq(0).attr('href')
    }
  },
  install: function (output, iPath) {
    return require('./../js/install')(output, iPath)
  }
}
module.exports = data
