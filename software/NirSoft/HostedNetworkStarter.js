'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/wifi_hotspot_starter.html',
  version: {
    selector: '.utilcaption'
  },
  download: {
    plain: 'https://www.nirsoft.net/utils/hostednetworkstarter.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
