'use strict'

let data = {
  url: 'https://download.racket-lang.org/',
  version: {
    selector: 'h3'
  },
  download: {
    selector: 'option[value$="x86_64-win32.exe"]',
    attr: 'value'
  },
  install: function (output, iPath) {
    return require('./../js/install')(output, iPath)
  }
}
module.exports = data
