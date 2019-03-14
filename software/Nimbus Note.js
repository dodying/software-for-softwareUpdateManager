'use strict'

let data = {
  commercial: 2,
  url: 'https://nimbusweb.me/',
  version: {
    func: async (res, $, fns, choice) => {
      let uri1 = 'https://nimbusweb.me/nimbus-note-windows.php'
      let res1 = await fns.req(uri1, { headers: {} })
      let $1 = fns.cheerio.load(res1.body)
      return $1('.product_right_title').eq(0).text().match(/(\d+[\d.]+\d+)/)[1]
    }
  },
  download: {
    plain: 'https://nimbusweb.me/nimbusnote.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
