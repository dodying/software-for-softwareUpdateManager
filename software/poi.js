'use strict'

let data = {
  url: 'https://github.com/poooi/poi/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /v(.*)/
  },
  download: {
    func: async (res, $) => $('a[href*="/releases/download/"][href$="win.7z"]').eq(-1).attr('href')
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
