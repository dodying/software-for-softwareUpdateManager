'use strict'

let data = {
  url: 'https://cdn01.moecube.com/downloads/latest.yml',
  version: (res, $) => res.body.match(/mycard-setup-(.*?).exe/)[1],
  download: (res, $) => 'https://cdn01.moecube.com/downloads/' + res.body.match(/path: (.*)/)[1],
  install: ['install_zipped', 'install', 'app-32.7z']
}
module.exports = data
