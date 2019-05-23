'use strict'

let data = {
  commercial: 3,
  url: 'https://data.services.jetbrains.com/products/releases?code=HB&latest=true',
  preferPath: 'bin/hub.bat',
  version: {
    func: async (res, $) => res.json.HB[0].version
  },
  download: {
    func: async (res, $) => res.json.HB[0].downloads.windows.link
  },
  install: function (output, iPath, fns) {
    return fns.install.msi(output, iPath, null, data.preferPath)
  }
}
module.exports = data
