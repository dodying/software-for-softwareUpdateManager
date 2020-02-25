'use strict'

let data = {
  commercial: 2,
  url: 'https://www.codesector.com/downloads',
  version: '.col:contains("Windows") td:contains("TeraCopy")',
  download: 'https://www.codesector.com/files/teracopy.exe',
  install: 'install_inno_type',
  other: {
    2: {
      version: '.col:contains("Windows") td:contains("TeraCopy 2")',
      download: '.col:contains("Windows") tr:contains("TeraCopy 2") a[href$=".exe"]'
    }
  }
}
module.exports = data
