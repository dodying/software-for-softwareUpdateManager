'use strict'

let data = {
  url: 'https://github.com/o2team/xcel/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /v(.*)/
  },
  download: {
    func: async (res, $) => $('a[href*="/releases/download/"][href$=".exe"]').eq(-1).attr('href')
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
