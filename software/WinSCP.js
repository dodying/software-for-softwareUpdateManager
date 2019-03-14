'use strict'

let data = {
  withoutHeader: true,
  url: 'https://winscp.net/eng/download.php',
  version: {
    selector: 'h1'
  },
  download: {
    func: async (res, $, fns, choice) => {
      let uri1 = $('a[href$="Setup.exe"]').eq(0).attr('href')
      let res1 = await fns.req(uri1)
      let $1 = fns.cheerio.load(res1.body)
      return $1('a[href$="Setup.exe/download"]').eq(0).attr('href')
    }
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
