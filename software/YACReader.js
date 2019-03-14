'use strict'

let data = {
  url: 'http://www.yacreader.com/downloads',
  version: {
    selector: '.latestversion'
  },
  download: {
    selector: '.dwnld.windows>a'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
