'use strict'

let data = {
  url: 'https://mpv.srsfckn.biz/',
  version: {
    selector: '.latest>td',
    match: /(.*)/
  },
  download: {
    selector: '.latest a[href^="/mpv-x86_64"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath, 'doc')
  }
}
module.exports = data
