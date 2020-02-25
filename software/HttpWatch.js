'use strict'

let data = {
  commercial: 3,
  url: 'https://www.httpwatch.com/download/versionhistory/',
  version: '.history',
  changelog: '.history+ul',
  download: 'https://download.httpwatch.com/httpwatchpro.exe?v={version}.exe',
  install: 'install_nsis_cli',
  other: {
    basic: {
      commercial: 0,
      download: 'https://download.httpwatch.com/httpwatch.exe?v={version}.exe'
    }
  }
}
module.exports = data
