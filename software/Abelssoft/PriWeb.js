'use strict'

let data = {
  commercial: 3,
  url: 'https://www.abelssoft.de/en/windows/Security-Privacy/PriWeb',
  version: {
    selector: '.infobox .grid__item:contains("Version")',
    match: /\(v(.*?)\)/
  },
  download: {
    plain: 'https://www.abelssoft.de/priweb.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
