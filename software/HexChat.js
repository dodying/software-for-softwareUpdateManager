'use strict'

let data = {
  url: 'https://hexchat.github.io/downloads.html',
  version: {
    selector: '[href$="x64.exe"]',
    attr: 'href',
    match: /%20(.*?)%20x64/
  },
  download: {
    selector: '[href$="x64.exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
