'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/wireless_net_console.html',
  version: {
    selector: '.utilcaption'
  },
  download: {
    plain: 'https://www.nirsoft.net/utils/wirelessnetconsole.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
