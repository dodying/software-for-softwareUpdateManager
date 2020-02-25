'use strict'

let data = {
  url: 'https://www.voidtools.com/downloads/',
  version: '#dl',
  changelog: {
    url: 'https://www.voidtools.com/Changes.txt',
    match: /Version [\d.]+$/,
    split: true
  },
  download: 'https://www.voidtools.com/Everything-{version}.x64.zip',
  install: 'install'
}
module.exports = data
