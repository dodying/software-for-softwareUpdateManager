'use strict'

let data = {
  commercial: 2,
  url: 'https://sysprogs.com/analyzer2go/download/',
  version: ['.download_button', 'href', /Analyzer2GO-(.*?)-trial.msi/],
  download: '.download_button',
  install: ['install_msi', null, 'LogicViewer.exe']
}
module.exports = data
