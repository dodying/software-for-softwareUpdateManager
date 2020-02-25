'use strict'

let data = {
  url: 'https://sysprogs.com/legacy/tools/srvman/',
  version: ['[href*="getfile"]', 'href', /srvman-(.*?).7z/],
  download: '[href*="getfile"]',
  install: ['install_zipped_single', 'x64\\\\srvman.exe']
}
module.exports = data
