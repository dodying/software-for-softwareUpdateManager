'use strict'

let data = {
  commercial: 3,
  url: 'https://www.abelssoft.de/en/windows/Security-Privacy/ToolbarTerminator',
  version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
  download: 'https://www.abelssoft.de/toolbarterminator.exe',
  install: 'install_inno'
}
module.exports = data
