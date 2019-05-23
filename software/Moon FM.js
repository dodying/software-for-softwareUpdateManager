'use strict'

let data = {
  url: 'https://moon.fm/labs',
  version: {
    selector: 'a[href$=".exe"]',
    attr: 'href',
    match: /Setup%20(.*?).exe/
  },
  download: {
    selector: 'a[href$=".exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install', 'app-64.7z')
  }
}
module.exports = data
