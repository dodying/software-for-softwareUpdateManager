'use strict'

let data = {
  useProxy: true,
  url: 'https://www.adlice.com/download/vtuploader/',
  version: 'table > tbody > tr:nth-child(3) > td:nth-child(2)',
  changelog: {
    url: 'https://download.adlice.com/VTU/changelog.txt',
    match: /^V[\d.]+/,
    split: true
  },
  download: 'https://download.adlice.com/api/?action=download&app=vtuploader&type=x86',
  install: 'install_single'
}
module.exports = data
