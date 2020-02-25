'use strict'

let data = {
  url: 'https://androidaapt.com/',
  version: ['.download-card>.item>.tips', 'text', /v(.*)/],
  download: 'https://dl.androidaapt.com/aapt-windows.zip',
  install: 'install_zipped_single'
}
module.exports = data
