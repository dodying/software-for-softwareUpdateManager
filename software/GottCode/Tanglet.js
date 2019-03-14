'use strict'

let data = {
  url: 'https://gottcode.org/tanglet/',
  version: {
    selector: '.version'
  },
  download: {
    plain: 'https://gottcode.org/tanglet/download/?os=windows'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
