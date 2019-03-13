'use strict'

let data = {
  url: 'https://fastcopy.jp/',
  version: {
    selector: '.table_head>th'
  },
  download: {
    func: async (res, $, req, cheerio) => {
      let url = $('.dl_link>a').attr('href')
      let res1 = await req(url)
      let $1 = cheerio.load(res1.body)
      return $1('.dl a').attr('href')
    }
  },
  install: function (output, iPath) {
    let parentPath = require('path').parse(iPath).dir
    return require('child_process').execSync(`"${output}" /SILENT /DIR="${parentPath}" /EXTRACT64 /NOSUBDIR`)
  }
}
module.exports = data
