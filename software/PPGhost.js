'use strict'

let data = {
  url: 'https://pro.25pp.com/updatelog_40.html',
  version: {
    selector: '.last-item>h3'
  },
  download: {
    plain: 'https://ghost.25pp.com/soft/PPGhostSetup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
