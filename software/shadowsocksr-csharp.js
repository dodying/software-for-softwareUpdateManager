'use strict'

let data = {
  url: 'https://github.com/shadowsocksrr/shadowsocksr-csharp/releases',
  version: {
    selector: '.muted-link.css-truncate',
    match: /(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$=".zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath, 'templates')
  }
}
module.exports = data
