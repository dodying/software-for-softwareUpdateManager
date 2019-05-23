'use strict'

let data = {
  url: 'https://www.asm-l.cn/update.json',
  version: {
    func: async (res, $) => res.body.match(/file:"(.*?)"/)[1].match(/(\d+[\d.]+\d+)/)[1]
  },
  download: {
    func: async (res, $) => res.body.match(/file:"(.*?)"/)[1]
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
