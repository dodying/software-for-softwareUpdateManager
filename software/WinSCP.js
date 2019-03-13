'use strict'

let data = {
  withoutHeader: true,
  url: 'https://winscp.net/eng/download.php',
  version: {
    selector: 'h1'
  },
  download: {
    func: async (res, $, req, cheerio, choice) => {
      let uri1 = $('a[href$="Setup.exe"]').eq(0).attr('href')
      let res1 = await req(uri1)
      let $1 = cheerio.load(res1.body)
      return $1('a[href$="Setup.exe/download"]').eq(0).attr('href')
    }
  },
  install: function (output, iPath) {
    return require('./../js/install_inno')(output, iPath)
  }
}
module.exports = data
