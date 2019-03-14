'use strict'

let data = {
  url: 'https://github.com/zhongyang219/TrafficMonitor/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /V(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$=".7z"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
