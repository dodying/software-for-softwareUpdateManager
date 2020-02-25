'use strict'

let data = {
  url: 'https://www.rizonesoft.com/downloads/notepad3/',
  version: 'th:contains("Version")+td',
  changelog: ['https://www.rizonesoft.com/downloads/notepad3/update/', '.entry-content'],
  download: 'th:contains("Portable")+td>.download-link',
  install: ['install_zipped', 'install', 'x64.zip']
}
module.exports = data
