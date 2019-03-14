'use strict'

let data = {
  url: 'https://www.techpowerup.com/download/techpowerup-gpu-z/',
  version: {
    selector: '.title'
  },
  download: {
    func: async (res, $, fns) => fns.download.techpowerup(res, $, fns)
  },
  install: function (output, iPath, fns) {
    return fns.install.single(output, iPath)
  }
}
module.exports = data
