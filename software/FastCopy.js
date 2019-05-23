'use strict'

let data = {
  url: 'https://fastcopy.jp/',
  version: {
    selector: '.table_head>th'
  },
  download: {
    func: async (res, $, fns) => {
      let url = $('.dl_link>a').attr('href')
      let res1 = await fns.req(url)
      let $1 = fns.cheerio.load(res1.body)
      return $1('.dl a').attr('href')
    }
  },
  install: function (output, iPath, fns) {
    return fns.install.cli(output, iPath, output, ['/SILENT', '/DIR={dir}', '/EXTRACT64', '/NOSUBDIR'])
  }
}
module.exports = data
