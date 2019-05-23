'use strict'

let data = {
  url: 'http://makemkv.com/download/',
  version: {
    selector: '[href^="/download/Setup_"]'
  },
  download: {
    selector: '[href^="/download/Setup_"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
