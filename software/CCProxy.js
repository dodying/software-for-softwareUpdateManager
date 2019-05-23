'use strict'

let data = {
  url: 'https://www.youngzsoft.net/ccproxy/proxy-server-download.htm',
  version: {
    selector: 'td:has([itemprop="name"])',
    match: /v(.*?\))/
  },
  download: {
    plain: 'http://update.youngzsoft.com/ccproxy/update/ccproxysetup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath)
  }
}
module.exports = data
