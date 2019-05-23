'use strict'

let data = {
  url: 'https://www.itsk.com/thread-396278-1-1.html',
  version: {
    selector: '#thread_subject'
  },
  download: {
    selector: '[href$=".7z"][href*="EasySysprep"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath, null, null, '-p"itsk.com"')
  }
}
module.exports = data
