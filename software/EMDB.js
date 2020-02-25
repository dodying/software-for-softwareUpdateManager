'use strict'

let data = {
  url: 'https://www.emdb.eu/',
  version: ['.article-header', 'text', /V(\d+[\d.]+\d+)/],
  changelog: '.article',
  download: 'https://www.emdb.eu/bin/emdb.zip',
  install: ['install_zipped', 'install_inno']
}
module.exports = data
