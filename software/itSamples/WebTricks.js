'use strict'

let data = {
  url: 'http://www.itsamples.com/webtricks.html',
  version: async (res, $) => res.body.match(/version: (\d+[\d.]+\d+)/i)[1],
  download: 'http://www.itsamples.com/downloads/webtricks.zip',
  install: ['install_zipped', 'install_inno_cli', '.exe']
}
module.exports = data
