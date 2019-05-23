'use strict'

let data = {
  url: 'https://www.bleachbit.org/download/windows',
  version: {
    selector: '.field-item>p'
  },
  download: {
    func: async (res, $, fns, choice) => {
      let res1 = await fns.req($('[href$="portable.zip"]').eq(0).attr('href'))
      let $1 = fns.cheerio.load(res1.body)
      return $1('meta[http-equiv="refresh"]').attr('content').match(/url=(.*)/i)[1]
    }
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
