'use strict'

let data = {
  commercial: 1,
  url: 'https://prepros.io/downloads',
  version: {
    func: async (res, $, fns) => {
      let res1 = await fns.reqHEAD('https://prepros.io/downloads/stable/windows')
      return res1.headers['content-disposition'].match(/filename="(.*)"/)[1].match(/-(\d+[\d.]+\d+)/)[1]
    }
  },
  download: {
    plain: 'https://prepros.io/downloads/stable/windows'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install', 'full.nupkg', null, 'lib\\net45')
  }
}
module.exports = data
