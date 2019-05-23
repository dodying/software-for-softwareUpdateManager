'use strict'

let data = {
  commercial: 2,
  url: 'https://directorymonitor.com/download',
  version: {
    selector: '.downloads strong'
  },
  download: {
    plain: 'http://cdn.directorymonitor.com/DirectoryMonitor2_Portable.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
