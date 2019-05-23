'use strict'

let data = {
  commercial: 3,
  url: 'https://www.abelssoft.de/en/windows/Security-Privacy/GClean',
  version: {
    selector: '.infobox .grid__item:contains("Version")',
    match: /\(v(.*?)\)/
  },
  download: {
    plain: 'https://www.abelssoft.de/gc.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
