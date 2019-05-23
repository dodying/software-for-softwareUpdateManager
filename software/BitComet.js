'use strict'

let data = {
  useProxy: true,
  commercial: 1,
  url: 'https://www.bitcomet.com/en/archive',
  version: {
    func: async (res, $, fns, choice) => fns.walkLink(res, fns, {
      selector: '.bc_table_version>a[href*="BitComet"][href$=".zip"]',
      attr: 'text',
      sort: true,
      match: /BitComet_(.*?)\.zip/
    })
  },
  download: {
    func: async (res, $, fns, choice) => fns.walkLink(res, fns, {
      selector: '.bc_table_version>a[href*="BitComet"][href$=".zip"]',
      sort: true
    })
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
