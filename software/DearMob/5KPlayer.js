'use strict'

let data = {
  url: 'http://dl1.5kplayer.com/download/onlineload.config',
  version: (res, $) => res.json.version,
  download: (res, $) => res.json['x64'].url,
  installType: 'nsis',
  install: ['install_zipped', 'install', 'app.7z']
}
module.exports = data
