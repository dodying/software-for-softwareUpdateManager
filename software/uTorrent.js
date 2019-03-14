'use strict'

// Referrer: https://www.portablefreeware.com/index.php?id=483
// To disable advertisements: http://www.freewaregenius.com/how-to-turn-ads-off-in-utorrent/

let data = {
  commercial: 2,
  url: 'http://blog.utorrent.com/releases/windows/',
  version: {
    func: async (res, $) => $('.entry-title').eq(0).text().replace(/uTorrent (\d+[\d.]+\d+) For Windows \(build (\d+)\)/, '$1.$2')
  },
  download: {
    plain: 'http://download-hr.utorrent.com/track/stable/endpoint/utorrent/os/windows'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath, 'Carrier.EXE')
  },
  afterInstall: function (output, iPath, fns) {
    let path = require('path')
    let fs = require('fs')
    let parentPath = path.parse(iPath).dir
    let setting = path.resolve(parentPath, 'settings.dat')
    if (!fs.existsSync(setting)) fs.writeFileSync(setting, '')
  }
}
module.exports = data
