'use strict'

let data = {
  commercial: 2,
  url: 'https://www.spreaker.com/download',
  version: {
    func: async (res, $, fns, choice) => {
      let res1 = await fns.reqHEAD('https://www.spreaker.com/desktop-studio/download')
      return res1.request.uri.href.match(/studio-(.*?)-setup/)[1]
    }
  },
  download: {
    plain: 'https://www.spreaker.com/desktop-studio/download'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install', 'full.nupkg', null, 'lib\\net45')
  }
}
module.exports = data
