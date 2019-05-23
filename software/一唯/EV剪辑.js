'use strict'

let data = {
  commercial: 2,
  url: 'https://www.ieway.cn/evedit.html',
  version: {
    selector: '[href$=".exe"]'
  },
  download: {
    selector: '[href$=".exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install', 'app.7z')
  }
}
module.exports = data
