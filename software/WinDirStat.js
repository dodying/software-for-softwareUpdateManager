'use strict'

let data = {
  withoutHeader: true,
  url: 'https://windirstat.net/download.html',
  version: {
    selector: 'li.download'
  },
  download: {
    selector: 'a[href*="sourceforge.net"][href$=".exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath, 'windirstat.exe')
  }
}
module.exports = data
