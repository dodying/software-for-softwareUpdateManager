'use strict'

let data = {
  commercial: 3,
  url: 'https://www.abelssoft.de/en/windows/Helpers/Find-My-Files',
  version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
  download: 'https://www.abelssoft.de/FindMyFiles.exe',
  install: 'install_inno'
}
module.exports = data
