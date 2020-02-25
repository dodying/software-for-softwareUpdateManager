'use strict'

let data = {
  url: 'https://www.rizonesoft.com/downloads/windows-10-update-switch/',
  version: 'th:contains("Version")+td',
  download: 'th:contains("Portable")+td>.download-link',
  install: 'install'
}
module.exports = data
