'use strict'

let data = {
  url: 'https://www.freedownloadmanager.org/download.htm',
  version: '.download_btn_new+div',
  download: '.download_btn_new',
  install: ['install_inno', null, { '{code_CefInstallDir}': '{dir}' }]
}
module.exports = data
