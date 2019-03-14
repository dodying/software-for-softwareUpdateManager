'use strict'

let data = {
  url: 'https://gottcode.org/connectagram/',
  version: {
    selector: '.version'
  },
  download: {
    plain: 'https://gottcode.org/connectagram/download/?os=windows'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
