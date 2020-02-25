'use strict'

let data = {
  url: 'https://sysprogs.com/legacy/virtualkd/download/',
  version: ['.download_button', 'href', /VirtualKD-(.*?).exe/],
  download: '.download_button',
  install: 'install'
}
module.exports = data
