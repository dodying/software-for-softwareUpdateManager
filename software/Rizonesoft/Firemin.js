'use strict'

let data = {
  url: 'https://www.rizonesoft.com/downloads/firemin/',
  version: 'th:contains("Version")+td',
  changelog: 'h1:contains("Changes")+ul',
  download: 'th:contains("Portable")+td>.download-link',
  install: 'install'
}
module.exports = data
