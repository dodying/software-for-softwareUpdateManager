'use strict'

let data = {
  commercial: 3,
  url: 'http://www.faststone.org/FSCapturerDownload.htm',
  version: {
    selector: 'b>font[size="2"]'
  },
  download: {
    selector: 'a[href$=".zip"]:not([href*="Setup"])'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
