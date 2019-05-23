'use strict'

let data = {
  commercial: 3,
  url: 'https://data.services.jetbrains.com/products/releases?code=RS&latest=true',
  version: {
    func: async (res, $) => res.json.RS[0].version
  },
  download: {
    func: async (res, $) => res.json.RS[0].downloads.windowsWeb.link
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
