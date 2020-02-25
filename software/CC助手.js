'use strict'

let data = {
  site: {
    download: 'https://ccyixia.com/'
  },
  versionChoice: 'https://ccyixia.com/updates/download?platform=windows&arch=x64',
  changelog: {
    url: 'https://ccyixia.com/docs/changelog/',
    selector: '.content',
    attr: 'text',
    match: /^#[\d-]+/,
    split: true
  },
  install: 'install_inno_type'
}
module.exports = data
