'use strict'

let data = {
  url: 'https://discordapp.com/download',
  version: {
    func: async (res, $, fns, choice) => {
      let res1 = await fns.reqHEAD('https://discordapp.com/api/download?platform=win')
      return res1.request.uri.href.match(/win\/(.*?)\/DiscordSetup/)[1]
    }
  },
  download: {
    plain: 'https://discordapp.com/api/download?platform=win'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install', 'full.nupkg', null, 'lib\\net45')
  }
}
module.exports = data
