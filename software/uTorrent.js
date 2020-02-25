'use strict'

// Referrer: https://www.portablefreeware.com/index.php?id=483
// To disable advertisements: http://www.freewaregenius.com/how-to-turn-ads-off-in-utorrent/

let data = {
  commercial: 2,
  url: 'https://blog.utorrent.com/releases/windows/',
  version: ['.entry-title', 'text', /Torrent (\d+[\d.]+\d+) For Windows \(build (\d+)\)/, '$1.$2'],
  changelog: '.entry-content',
  download: 'https://download-new.utorrent.com/track/stable/endpoint/utorrent/os/windows',
  install: ['install_zipped_single', 'Carrier.EXE'],
  afterInstall: info => {
    let path = require('path')
    let fs = require('fs')
    let setting = path.resolve(info.parentPath, 'settings.dat')
    if (!fs.existsSync(setting)) fs.writeFileSync(setting, '')
  },
  other: {
    beta: {
      url: 'https://utclient.utorrent.com/offers/beta_release_notes/release_notes.html',
      version: ['.content>h2', 'text', /Torrent (\d+[\d.]+\d+) Beta \(build (\d+)\)/, '$1.$2'],
      changelog: '.content>.post',
      download: 'https://download-new.utorrent.com/endpoint/utorrent/os/windows/track/beta',
      install: null
    }
  }
}
module.exports = data
