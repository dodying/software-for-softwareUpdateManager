'use strict'

let data = {
  commercial: 2,
  url: 'https://sysprogs.com/VisualKernel/download/',
  version: ['.download_button', 'href', /VisualKernel-(.*?)-trial.msi/],
  download: '.download_button',
  install: ['install_msi', null, 'VisualKernel.exe']
}
module.exports = data
