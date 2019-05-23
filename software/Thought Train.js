'use strict'

let data = {
  commercial: 3,
  url: 'https://www.thoughttrain.cc/',
  version: {
    func: async (res, $, fns, choice) => {
      let uri1 = $('.elementor-button-link:contains("Download for Windows")').eq(0).attr('href')
      let res1 = await fns.reqHEAD(uri1)
      return res1.request.uri.href.match(/thought-train-(.*?).exe/)[1]
    }
  },
  download: {
    selector: '.elementor-button-link:contains("Download for Windows")'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install', 'app-64.7z')
  }
}
module.exports = data
