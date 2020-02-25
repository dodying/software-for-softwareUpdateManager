'use strict'

let data = {
  url: 'http://www.itsamples.com/flash-pictures-switcher.html',
  version: async (res, $) => res.body.match(/version: (\d+[\d.]+\d+)/i)[1],
  download: 'http://www.itsamples.com/downloads/flash-pictures-switcher.zip',
  install: ['install_zipped', 'install_inno_cli']
}
module.exports = data
