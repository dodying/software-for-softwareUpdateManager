'use strict'

let data = {
  commercial: 2,
  url: 'https://rbsoft.org/downloads/easy-disk-catalog-maker/changelog.html',
  version: '#section-changelog>h3',
  changelog: {
    selector: '#section-changelog',
    attr: 'text',
    match: /^v[\d.]+/,
    split: true
  },
  download: 'https://rbsoft.org/downloads/easy-disk-catalog-maker/Easy-Disk-Catalog-Maker-Setup.exe',
  install: 'install_nsis'
}
module.exports = data
