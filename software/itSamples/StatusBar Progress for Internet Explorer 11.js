'use strict'

let data = {
  url: 'http://www.itsamples.com/statusbar-progress-ie11.html',
  version: async (res, $) => res.body.match(/version: (\d+[\d.]+\d+)/i)[1],
  download: 'http://www.itsamples.com/downloads/statusbar-progress-ie11-setup.zip',
  install: ['install_zipped', 'install_inno_cli', '.exe']
}
module.exports = data
