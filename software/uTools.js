'use strict'

let data = {
  url: 'https://resource.u-tools.cn/version/latest.yml',
  version: (res, $) => res.body.match(/uTools-(.*?).exe/)[1],
  download: (res, $) => 'https://resource.u-tools.cn/version/' + res.body.match(/path: (.*)/)[1],
  install: ['install_zipped', 'install', 'app-64.7z']
}
module.exports = data
