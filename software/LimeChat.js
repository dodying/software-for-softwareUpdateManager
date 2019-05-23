'use strict'

let data = {
  url: 'http://limechat.net/',
  version: {
    selector: '[href$="x64.exe"]'
  },
  download: {
    selector: '[href$="x64.exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
