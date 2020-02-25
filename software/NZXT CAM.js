'use strict'

let data = {
  url: 'http://nzxt-app.nzxt.com/latest.yml',
  version: (res, $) => res.body.match(/version: (.*)/)[1],
  download: (res, $) => 'http://nzxt-app.nzxt.com/' + res.body.match(/- url: (.*)/)[1],
  install: ['install_zipped', 'install', 'app-64.7z']
}
module.exports = data
