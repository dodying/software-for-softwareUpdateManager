'use strict'

let data = {
  useProxy: true,
  url: 'http://wujieliulan.com/',
  version: {
    selector: '#Right+div:has(a[href="http://wujieliulan.com/download/u.exe"])'
  },
  download: {
    plain: 'http://wujieliulan.com/download/u.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.single(output, iPath)
  }
}
module.exports = data
