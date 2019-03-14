'use strict'

let data = {
  url: 'https://gottcode.org/novprog/',
  version: {
    selector: '.version'
  },
  download: {
    plain: 'https://gottcode.org/novprog/download/?os=windows'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
