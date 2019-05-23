'use strict'

let data = {
  commercial: 3,
  useProxy: true,
  url: 'https://file.termix.io/',
  version: {
    func: async (res, $, fns, choice) => fns.walkLink(res, fns, {
      selector: 'a[href$=".zip"]',
      sort: true,
      match: /Termix-(.*?)-windows.zip/
    })
  },
  download: {
    func: async (res, $, fns, choice) => fns.walkLink(res, fns, {
      selector: 'a[href$=".zip"]',
      sort: true
    })
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  },
  other: {
    nightly: {
      url: 'https://file.termix.io/nightly/',
      version: {
        func: async (res, $, fns, choice) => fns.walkLink(res, fns, {
          selector: 'a[href$=".zip"]',
          sort: true,
          match: /Termix-(.*?)-windows.zip/
        })
      }
    }
  }
}
module.exports = data
