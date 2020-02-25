'use strict'

let data = {
  url: 'https://cacher-download.nyc3.digitaloceanspaces.com/latest.yml',
  version: (res, $) => res.body.match(/Cacher Setup (.*?).exe/)[1],
  download: (res, $) => 'https://s3.amazonaws.com/download.cacher.io/' + res.body.match(/path:\s+(.*)/)[1],
  install: ['install_zipped', 'install', 'app-64.7z']
}
module.exports = data
