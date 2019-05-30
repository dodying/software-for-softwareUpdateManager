'use strict'

let data = {
  url: 'https://www.sordum.org/downloads/?st-sordum-monitor-off',
  version: {
    selector: '[align="left"]>a'
  },
  download: {
    func: async (res, $, fns, choice) => {
      let uri1 = $('a[href*="files/downloads.php"]').eq(0).attr('href')
      let res1 = await fns.reqHEAD(uri1)
      return res1.request.uri.href
    }
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data