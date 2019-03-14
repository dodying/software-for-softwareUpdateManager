'use strict'

let data = {
  url: 'https://shuax.com/project/firedoge/',
  version: {
    selector: '.title'
  },
  download: {
    plain: 'https://shuax.com/fd'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath, null, 'x64')
  }
}
module.exports = data
