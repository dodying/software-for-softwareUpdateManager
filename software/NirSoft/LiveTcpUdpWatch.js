'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/live_tcp_udp_watch.html',
  version: {
    selector: '.utilcaption'
  },
  download: {
    plain: 'https://www.nirsoft.net/utils/livetcpudpwatch-x64.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
