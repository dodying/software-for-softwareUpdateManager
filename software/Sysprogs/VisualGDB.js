'use strict'

let data = {
  commercial: 2,
  url: 'https://visualgdb.com/download/',
  version: ['.download_button', 'href', /VisualGDB-(.*?)-trial.msi/],
  download: '.download_button',
  install: ['install_msi', null, 'VisualGDB.exe'],
  other: {
    beta: {
      version: ['.download_button.btn_glossy_orange', 'href', /VisualGDB-(.*?).msi/],
      download: '.download_button.btn_glossy_orange'
    }
  }
}
module.exports = data
