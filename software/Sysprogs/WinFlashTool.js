'use strict'

let data = {
  url: 'https://sysprogs.com/winflashtool/download/',
  version: ['.download_button', 'href', /WinFLASHTool-(.*?).exe/],
  download: '.download_button',
  install: 'install_single'
}
module.exports = data
