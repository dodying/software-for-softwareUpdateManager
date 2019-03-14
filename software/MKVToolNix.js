'use strict'

let data = {
  url: 'https://mkvtoolnix.download/windows/releases/',
  version: {
    func: async (res, $, fns, choice) => fns.walkLink(res.request.uri.href, fns, { selector: '.fb-n>a', attr: 'text', sort: true })
  },
  download: {
    func: async (res, $, fns, choice) => fns.walkLink(res.request.uri.href, fns, { selector: '.fb-n>a', sort: true }, '.fb-n>a[href*="64-bit"][href$=".7z"]')
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
