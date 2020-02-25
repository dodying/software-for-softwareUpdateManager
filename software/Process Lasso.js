'use strict'

let data = {
  commercial: 2,
  url: 'https://bitsum.com/changes/processlasso/',
  version: '[href="/changes/processlasso/"]',
  changelog: '#changes+p+ul',
  download: 'https://bitsum.com/files/processlassosetup64.exe',
  install: 'install_nsis',
  other: {
    beta: {
      url: 'https://bitsum.com/current_version.txt',
      version: 'body',
      download: 'https://dl.bitsum.com/files/beta/processlassosetup64.exe',
      changelog: {
        split: true
      }
    }
  }
}
module.exports = data
