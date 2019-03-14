'use strict'

let data = {
  commercial: 2,
  useProxy: true,
  url: 'https://protonvpn.com/download/win-update.json',
  version: {
    func: async (res, $) => JSON.parse(res.body).Categories[1].Releases[0].Version
  },
  download: {
    func: async (res, $) => JSON.parse(res.body).Categories[1].Releases[0].File.Url
  },
  install: function (output, iPath, fns) {
    return fns.install.ai(output, iPath)
  }
}
module.exports = data
