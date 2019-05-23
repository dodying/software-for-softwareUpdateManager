'use strict'

let data = {
  commercial: 2,
  url: 'https://www.fotosizer.com/Download',
  version: {
    selector: '[style="font-size: 18px"]'
  },
  download: {
    func: async (res, $, fns, choice) => {
      let res1 = await fns.req('https://www.fotosizer.com/Downloader.ashx')
      return res1.body
    }
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
