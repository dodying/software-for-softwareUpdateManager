'use strict'

let data = {
  commercial: 1,
  url: 'http://www.faststone.org/FSResizerDownload.htm',
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
