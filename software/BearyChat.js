'use strict'

let data = {
  url: 'https://bearychat.com/releases/client/changelog.json',
  version: {
    func: async (res, $) => res.json.body.releases[0].version
  },
  download: {
    plain: 'https://download.bearychat.com/apps/win64'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install', 'full.nupkg', null, 'lib\\net45')
  }
}
module.exports = data
