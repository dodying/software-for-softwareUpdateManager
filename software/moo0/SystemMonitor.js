'use strict'

let data = {
  commercial: 1,
  url: 'https://www.moo0.com/software/SystemMonitor/',
  version: {
    selector: '.tdSoftwareInfoData>strong'
  },
  download: {
    plain: 'https://www.moo0.com/software/SystemMonitor/download/free/'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
