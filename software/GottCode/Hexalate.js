'use strict'

let data = {
  url: 'https://gottcode.org/hexalate/',
  version: {
    selector: '.version'
  },
  download: {
    plain: 'https://gottcode.org/hexalate/download/?os=windows'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
