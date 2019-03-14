'use strict'

let data = {
  url: 'https://shuax.com/project/greenchrome/',
  version: {
    selector: '.title'
  },
  download: {
    plain: 'https://shuax.com/gc'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath, null, 'x64')
  }
}
module.exports = data
