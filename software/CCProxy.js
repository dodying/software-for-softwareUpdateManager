'use strict'

let data = {
  url: 'https://www.youngzsoft.net/ccproxy/proxy-server-download.htm',
  version: ['td:has([itemprop="name"])', 'text', /v(.*?\))/],
  changelog: {
    url: 'https://www.youngzsoft.net/ccproxy/whatsnew.htm',
    selector: '#content',
    attr: 'text',
    match: /^[\d.]+/,
    split: true
  },
  download: 'http://update.youngzsoft.com/ccproxy/update/ccproxysetup.exe',
  install: 'install_inno_type'
}
module.exports = data
