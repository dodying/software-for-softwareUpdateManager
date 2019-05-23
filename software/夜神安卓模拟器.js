'use strict'

let data = {
  url: 'https://www.yeshen.com/',
  version: {
    selector: '.version'
  },
  download: {
    plain: 'https://www.yeshen.com/cn/download/fullPackage'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
