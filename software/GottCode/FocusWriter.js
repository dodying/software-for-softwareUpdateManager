'use strict'

let data = {
  url: 'https://gottcode.org/focuswriter/',
  version: {
    selector: '.version'
  },
  download: {
    plain: 'https://gottcode.org/focuswriter/download/?os=windows'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
