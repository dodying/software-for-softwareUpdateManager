'use strict'

let data = {
  url: 'https://www.softwareideas.net/en/download',
  version: {
    selector: 'a[href$="64-bit-Portable-"]'
  },
  download: {
    func: async (res, $, fns, choice) => fns.walkLink(res, fns, 'a[href$="64-bit-Portable-"]', '.download-link')
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
