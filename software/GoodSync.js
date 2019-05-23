'use strict'

let data = {
  url: 'https://www.goodsync.com/download',
  fixedPath: '%ProgramFiles%\\Siber Systems\\GoodSync\\GoodSync.exe',
  version: {
    selector: 'h3.textlabel'
  },
  download: {
    selector: '[data-download="gs-win"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.cli(output, iPath, output, ['/S'], { wait: true })
  }
}
module.exports = data
