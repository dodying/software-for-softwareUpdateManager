'use strict'

let data = {
  url: 'https://www.foxmail.com/',
  version: {
    selector: '.mainbanner-intro'
  },
  download: {
    plain: 'http://www.foxmail.com/win/download'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
