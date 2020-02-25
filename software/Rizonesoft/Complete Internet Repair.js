'use strict'

let data = {
  url: 'https://www.rizonesoft.com/downloads/complete-internet-repair/',
  version: 'th:contains("Version")+td',
  changelog: 'h1:contains("Changes")+ul',
  download: 'th:contains("Portable")+td>.download-link',
  install: 'install'
}
module.exports = data
