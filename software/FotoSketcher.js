'use strict'

let data = {
  url: 'https://fotosketcher.com/download-fotosketcher/',
  version: ['h1+p', 'text', /FotoSketcher (.*?) \(/],
  download: 'a[href$="setup_64bit.exe"]',
  install: 'install_inno_single'
}
module.exports = data
