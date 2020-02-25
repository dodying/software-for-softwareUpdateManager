'use strict'

let data = {
  url: 'https://sysprogs.com/SmarTTY/download/',
  version: ['.download_button', 'href', /SmarTTY-(.*?).msi/],
  download: '.download_button',
  install: ['install_msi', null, 'SmarTTY.exe']
}
module.exports = data
