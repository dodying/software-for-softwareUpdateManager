'use strict'

let data = {
  commercial: 3,
  url: 'https://www.folderico.com/download.html',
  version: 'h3:contains("Changelog")+p',
  changelog: 'h3:contains("Changelog")+p+ul',
  download: 'https://www.folderico.com/download/FolderIcoSetup.exe',
  install: 'install_inno_type'
}
module.exports = data
