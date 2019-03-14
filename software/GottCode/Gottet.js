'use strict'

let data = {
  url: 'https://gottcode.org/gottet/',
  version: {
    selector: '.version'
  },
  download: {
    plain: 'https://gottcode.org/gottet/download/?os=windows'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
