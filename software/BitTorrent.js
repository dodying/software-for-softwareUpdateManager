'use strict'

let data = {
  commercial: 2,
  url: 'http://blog.bittorrent.com/releases/windows/',
  version: {
    func: async (res, $) => {
      let matched = $('h1>a').eq(0).text().match(/BitTorrent (.*?) For Windows \(build (\d+)\)/)
      return matched[1] + '.' + matched[2]
    }
  },
  download: {
    plain: 'http://download-new.utorrent.com/endpoint/bittorrent/os/windows/track/stable/'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath, 'Carrier.EXE')
  }
}
module.exports = data
