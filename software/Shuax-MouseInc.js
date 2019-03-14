'use strict'

let data = {
  url: 'https://shuax.com/project/mouseinc/',
  version: {
    selector: '.title'
  },
  download: {
    plain: 'https://shuax.com/mi'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
