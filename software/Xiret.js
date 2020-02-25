'use strict'

let data = {
  url: 'https://www.bitmight.uk/software/xiret/changelog.txt',
  version: 'body',
  changelog: {
    match: /- Version [\d.]+/,
    split: true
  },
  download: 'https://bitmight.uk/software/xiret/download/xiret.zip',
  install: 'install_zipped_single'
}
module.exports = data
