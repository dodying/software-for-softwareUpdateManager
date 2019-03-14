'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/control_my_monitor.html',
  version: {
    selector: '.utilcaption'
  },
  download: {
    plain: 'https://www.nirsoft.net/utils/controlmymonitor.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
