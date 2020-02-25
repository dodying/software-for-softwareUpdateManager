'use strict'

let data = {
  url: 'https://www.rizonesoft.com/downloads/winsock-repair/',
  version: 'th:contains("Version")+td',
  download: 'th:contains("Download")+td>.download-link',
  install: 'install'
}
module.exports = data
