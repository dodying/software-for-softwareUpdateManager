'use strict'

let data = {
  url: 'https://s3.amazonaws.com/winds-2.0-releases/latest.html',
  version: ['#td-win>a', 'href', /Winds%20Setup%20(.*?).exe/],
  download: '#td-win>a',
  install: ['install_zipped', 'install', 'app-64.7z']
}
module.exports = data
