'use strict'

let data = {
  url: 'https://www.asm-l.cn/update.json',
  version: (res, $) => res.body.match(/file:"(.*?)"/)[1].match(/(\d+[\d.]+\d+)/)[1],
  changelog: async (res, $) => res.body.match(/log:"(.*?)"/)[1].replace(/\\r\\n/g, '\n'),
  download: (res, $) => res.body.match(/file:"(.*?)"/)[1],
  install: 'install'
}
module.exports = data
