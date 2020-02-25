'use strict'

let data = {
  url: 'http://www.itsamples.com/ie-screenshot.html',
  version: async (res, $) => res.body.match(/version: (\d+[\d.]+\d+)/i)[1],
  download: 'http://www.itsamples.com/downloads/ie-screenshot-setup-x86.zip',
  install: ['install_zipped', 'install_inno_cli']
}
module.exports = data
