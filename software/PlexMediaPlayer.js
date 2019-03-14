'use strict'

let data = {
  url: 'https://plex.tv/api/downloads/3.json',
  preferPath: 'PlexMediaPlayer.exe',
  version: {
    func: async (res, $) => JSON.parse(res.body).computer.Windows.version
  },
  download: {
    func: async (res, $) => JSON.parse(res.body).computer.Windows.releases[0].url
  },
  install: function (output, iPath, fns) {
    return fns.install.wix(output, iPath, null, 'PMP.msi', data.preferPath)
  }
}
module.exports = data
