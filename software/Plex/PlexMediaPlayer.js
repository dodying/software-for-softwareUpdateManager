'use strict'

let data = {
  url: 'https://plex.tv/api/downloads/3.json',
  version: (res, $) => res.json.computer.Windows.version,
  changelog: async (res, $) => [].concat('Added', res.json.computer.Windows.items_added, 'Fixed', res.json.computer.Windows.items_fixed).join('\n'),
  download: (res, $) => res.json.computer.Windows.releases[0].url,
  install: ['install_wix', null, 'PMP.msi', 'PlexMediaPlayer.exe']
}
module.exports = data
