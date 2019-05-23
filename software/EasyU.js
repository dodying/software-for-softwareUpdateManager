'use strict'

let data = {
  url: 'https://www.itsk.com/thread-396280-1-1.html',
  version: {
    selector: '#thread_subject'
  },
  download: {
    selector: '[href$=".7z"][href*="EasyU"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
