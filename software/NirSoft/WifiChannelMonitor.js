'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/wifi_channel_monitor.html',
  version: {
    selector: '.utilcaption'
  },
  download: {
    plain: 'https://www.nirsoft.net/utils/wifichannelmonitor-x64.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
