'use strict'

let data = {
  url: 'https://www.blender.org/download/',
  version: '#windows>a',
  changelog: ['https://wiki.blender.org/wiki/Reference/Release_Notes/{version}', '#mw-content-text'],
  download: (res, $) => $('.dl-header-cta-button').attr('href').replace('download', 'release').replace('www', 'download').replace(/\/$/, ''),
  install: ['install_msi', null, 'blender.exe']
}
module.exports = data
