'use strict'

let data = {
  url: 'https://www.cyotek.com/cyotek-gif-animator/downloads',
  version: '.file-version>a',
  changelog: ['https://www.cyotek.com/cyotek-gif-animator/revision-history', '.col-md-9>.row'],
  download: (res, $) => $('.file-option>a').eq(0).attr('href').replace('/info/', '/get/'),
  install: 'install_inno'
}
module.exports = data
