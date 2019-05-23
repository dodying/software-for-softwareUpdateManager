'use strict'

let data = {
  commercial: 2,
  url: 'https://github.com/danielng01/Iris-Builds/tree/master/Windows',
  version: {
    func: async (res, $, fns, choice) => fns.walkLink(res, fns, {
      selector: 'a.js-navigation-open[id]',
      sort: true,
      attr: 'text',
      match: /Iris-(.*?).exe/
    })
  },
  download: {
    func: async (res, $, fns, choice) => {
      let url = await fns.walkLink(res, fns, {
        selector: 'a.js-navigation-open[id]',
        sort: true,
        matchCheck: '.exe'
      })
      return url.replace('/blob/', '/raw/')
    }
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
