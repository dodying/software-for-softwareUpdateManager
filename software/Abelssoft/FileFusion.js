'use strict'

let data = {
  commercial: 3,
  url: 'https://www.abelssoft.de/en/windows/System-Utilities/FileFusion',
  version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
  download: 'https://www.abelssoft.de/filefusionsetup.exe',
  install: 'install_inno'
}
module.exports = data
