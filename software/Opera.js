'use strict'

let data = {
  url: 'https://get.geo.opera.com/pub/opera/desktop/',
  version: {
    func: async (res, $, fns, choice) => fns.walkLink(res, fns, {
      selector: 'a',
      sort: true,
      attr: 'text',
      match: /^(.*)\/$/
    })
  },
  download: {
    plain: 'https://get.geo.opera.com/pub/opera/desktop/{version}/win/Opera_{version}_Setup_x64.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
